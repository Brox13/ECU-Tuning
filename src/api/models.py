from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

w_services = db.Table('w_services',
    db.Column('taller_id', db.Integer, db.ForeignKey('taller.id'), primary_key=True),
    db.Column('services_id', db.Integer, db.ForeignKey('services.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_client = db.Column(db.Boolean(), unique=False, nullable=False)
    id_taller= db.Column(db.Integer, db.ForeignKey('taller.id'),
        nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "taller_id":self .id,
            "is_client":self .is_client,
            "name":self.name
        }

class Taller(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    w_name = db.Column(db.String(200), unique=True, nullable=False)
    w_address = db.Column(db.String(200), unique=True, nullable=False)
    w_services = db.relationship('Services', secondary=w_services, lazy='subquery',
        backref=db.backref('w_services', lazy=True))

    def __repr__(self):
        return f'<Taller {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "w_name": self.w_name,
            "w_address": self.w_address,
            "w_services": self.w_services,
        }

class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True, nullable=False)
    desc = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<Service {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "desc": self.desc,
            "value": value
        }

class Contacts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    from_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    to_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    message = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return f'<Contacted {self.id}>'

    def serialize(self):
        return {
            "id": self.id
        }