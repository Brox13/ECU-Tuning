"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, send_from_directory
from api.models import db, User, Services, Taller, Contacts
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash

import cloudinary
import cloudinary.uploader

from socket import gaierror
import smtplib


api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def Signup():
     body = request.get_json()
     hashed_password = generate_password_hash(body['password'])

     user = User(email=body['email'], password = hashed_password, name=body['name'], is_client=body['is_client'])
     
     if body["is_client"]==False:
        taller = Taller(w_name=body['w_name'], w_address=body['w_address'], lat=float(body['lat']), lng=float(body["lng"]))
        user.taller = taller

     db.session.add(user)
     db.session.commit()
     
     return jsonify({'msg':'ok'}), 200

@api.route('/login', methods=['POST']) #{"email: adf, password: asdfasd"}
def login():
        
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()

    

    if user is None:
        return jsonify("El usuario no existe"), 404
    if not user.checkPassword(body["password"]):
        return jsonify("Contraseña incorrecta"), 401

    my_token = create_access_token(identity=user.id)

    return jsonify({ "token": my_token, "is_client": user.is_client, "msg":"ok" }), 200

@api.route('/restore', methods=['POST'])
def post_restore():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    my_token = create_access_token(identity=user.id)
    return jsonify({ "token": my_token, "msg":"ok" }), 200

@api.route('/new/password', methods=['POST'])
@jwt_required()
def new_password():
    body = request.get_json()
    
    if not body["password"] == body["confirm"]:
        return jsonify({"msg": "error"})

    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    hashed_password = generate_password_hash(body['password'])
    user.password = hashed_password

    db.session.add(user)
    db.session.commit()

    return jsonify({ "msg":"ok" }), 200

@api.route('/map', methods=['GET'])
@jwt_required()
def handle_map():
    
    talleres=Taller.query.all()
    return jsonify({"msg":"ok", "talleres":[x.serialize() for x in talleres]}),200 


@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    taller = ""
    if user.taller is not None:
        taller = user.taller.serialize()
    return jsonify({"msg": "ok", "user_info": user.serialize(), "taller":taller}), 200

@api.route("/profile", methods=["POST"])
@jwt_required()
def post_profile():
    body = request.get_json()

    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()

    if not user.checkPassword(body["a_password"]):
        return jsonify("Contraseña incorrecta"), 401

    if len(body["n_password"]) > 6:
        user.password = body["n_password"]

    if len(body["name"]) > 6:
        user.name = body["name"]

    if len(body["email"]) > 6:
        user.email = body["email"]
        
    taller_data = ""

    if user.is_client == False:
        services = Services.query.all()

        taller = user.taller
        taller.w_services = []
        for i in range(len(services)):
            if body["sel_services"][i]["value"] == True:
                taller.w_services.append(services[i])

        if len(body["w_name"]) > 6:
            taller.w_name = body["w_name"]
        if len(body["w_address"]) > 6:
            taller.w_address = body["w_address"]
        if body["lat"] is not None and body["lng"] is not None:
            taller.lat = float(body["lat"])
            taller.lng = float(body["lng"])
    
        if taller is not None:
            taller_data = taller.serialize()

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "ok", "user_info": user.serialize(),
     "taller":taller_data}), 200

@api.route("/profile", methods=["DELETE"])
@jwt_required()
def delete_profile():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    taller = user.taller
    if taller is not None:
        db.session.delete(taller)
    
    db.session.delete(user)
    db.session.commit()
    return jsonify({"msg": "ok"}), 200

@api.route("/contact", methods=["POST"])
@jwt_required()
def post_contact():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    
    user = User.query.filter_by(id=current_user).first()

    body = request.get_json()

    taller = Taller.query.filter_by(id=body["taller_id"]).first()

    contact = Contacts(from_id=user.id, to_id=taller.user_id, message=body["message"], telefon=body["telefon"] , asunto=body["asunto"] , fname=body["fname"])

    if not len(body["message"]) > 6: 
        return jsonify({"msg": "error"}), 200       
    if not len(body["asunto"]) > 6:
        return jsonify({"msg": "error"}), 200         
    if not len(body["telefon"]) > 6:
         return jsonify({"msg": "error"}), 200        
    if not len(body["fname"]) > 2: 
        return jsonify({"msg": "error"}), 200 

    db.session.add(contact)
    db.session.commit()
    return jsonify({"msg": "ok"}), 200

    

@api.route("/services", methods=["GET"])
def services():
        
    servicios = Services.query.all()

    return jsonify({"msg": "ok", "all_services": [x.serialize() for x in servicios]}), 200

@api.route("/taller/<int:id>", methods=["GET"])
def get_taller(id):
        
   taller= Taller.query.filter_by(id=id).first()
   taller_user = User.query.filter_by(id=taller.user_id).first()
  
   return jsonify({"msg":'ok',"taller":taller.serialize(), "img": taller_user.image}), 200


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

@api.route('/upload', methods=['POST'])
@jwt_required()
def upload():
    if 'file' not in request.files:
        print('No file part')
        return redirect(request.url)
    file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
    if file.filename == '':
        print('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        current_user = get_jwt_identity()
        user = User.query.filter_by(id=current_user).first()
        result = cloudinary.uploader.upload(request.files['file'])
        user.image = result['secure_url']
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": "ok", "img_name": result['secure_url']})
        
from mailjet_rest import Client
@api.route('/test', methods=['GET'])
def texst():
    api_key = '72c626c238596b1e0a2bd4109e74374a'
    api_secret = 'e1711e3b084fefebc06b5563a163de67'
    mailjet = Client(auth=(api_key, api_secret), version='v3.1')
    data = {
        'Messages': [
				        {
				        		"From": {
					        			"Email": "luisaguadovicaria@gmail.com",
					        			"Name": "Me"
					        	},
					        	"To": [
						        		{
						        				"Email": "wofem14206@keyido.com",
										        "Name": "You"
								        }
					        	],
						        "Subject": "My first Mailjet Email!",
						        "TextPart": "Greetings from Mailjet!",
						        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
			        	}
		        ]
            }
    result = mailjet.send.create(data=data)
    print(result.status_code)
    print(result.json())
    return "ok", 200