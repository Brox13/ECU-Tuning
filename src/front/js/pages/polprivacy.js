import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

export const PoliticaPrivacidad = () => {
    return (
        <main className="container-fluid">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                <div className="col-md-12 p-lg-5 mx-auto">
                    <h2 className="featurette-heading fw-normal lh-1 text-danger">POLITICA DE PRIVACIDAD<span className="text-muted"> Ecu Tuning</span></h2>
                    <h5 className="featurette-heading fw-normal lh-1">Protección de datos de carácter personal según el RGPD</h5>
                    <hr></hr>
                    <p className="lead">
                        <p>Ecu Tuning, en aplicación de la normativa vigente en materia de protección de datos de carácter personal, informa que los datos personales que se recogen a través de los formularios del Sitio web: https://www.ecutuning.com/, se incluyen en los ficheros automatizados específicos de usuarios de los servicios de Ecu Tuning.</p>
                        <p>La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el mantenimiento de la relación comercial y el desempeño de tareas de información, formación, asesoramiento y otras actividades propias de Ecu Tuning.</p>
                        <p>Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias con el único objetivo de dar cumplimiento a la finalidad anteriormente expuesta.</p>
                        <p>Ecu Tuning adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.</p>
                        <p>El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición, rectificación, cancelación, limitación y portabilidad reconocidos en el citado Reglamento (UE). El ejercicio de estos derechos puede realizarlo el propio usuario a través de email a: administracion@ecutuning.com o en la dirección: C/ Ecu Tuning, 13</p>
                        <p>El usuario manifiesta que todos los datos facilitados por él son ciertos y correctos, y se compromete a mantenerlos actualizados, comunicando los cambios a Ecu Tuning.</p>
                        <h5>Finalidad del tratamiento de los datos personales:</h5>
                        <p></p>
                        <p className="text-danger">¿Con qué finalidad trataremos tus datos personales?</p>
                        <p>En Ecu Tuning, trataremos tus datos personales recabados a través del Sitio Web:</p>
                        <p>https://www.ecutuning.com/, con las siguientes finalidades:</p>
                        <p>1. Prestar sus servicios de acuerdo con las necesidades particulares de los clientes, con el fin de cumplirlos contratos suscritos por la misma.</p>
                        <p>Te recordamos que puedes oponerte al envío de comunicaciones comerciales por cualquier vía y en cualquier momento, remitiendo un correo electrónico a la dirección anteriormente indicada.</p>
                        <p>Los campos de dichos registros son de cumplimentación obligatoria, siendo imposible realizar las finalidades expresadas si no se aportan esos datos.</p>
                        <p></p>
                        <p className="text-danger">¿Por cuánto tiempo se conservan los datos personales recabados?</p>
                        <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no solicites su supresión y durante el plazo por el cuál pudieran derivarse responsabilidades legales por los servicios prestados.</p>
                        <p>Legitimación:</p>
                        <p>El tratamiento de tus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:</p>
                        <p>1. La solicitud de información y/o la contratación de los servicios de Ecu Tuning, cuyos términos y condiciones se pondrán a tu disposición en todo caso, de forma previa a una eventual contratación.</p>
                        <p>2. El consentimiento libre, específico, informado e inequívoco, en tanto que te informamos poniendo a tu disposición la presente política de privacidad, que tras la lectura de la misma, en caso de estar conforme, puedes aceptar mediante una declaración o una clara acción afirmativa, como el marcado de una casilla dispuesta al efecto.</p>
                        <p>En caso de que no nos facilites tus datos o lo hagas de forma errónea o incompleta, no podremos atender tu solicitud, resultando del todo imposible proporcionarte la información solicitada o llevar a cabo la contratación de los servicios.</p>
                        <p className="text-danger">Destinatarios:</p>
                        <p>Los datos no se comunicarán a ningún tercero ajeno a Ecu Tuning, salvo obligación legal.</p>
                        <p>Datos recopilados por usuarios de los servicios</p>
                        <p>En los casos en que el usuario incluya ficheros con datos de carácter personal en los servidores de alojamiento compartido, Talleres Fastrepro, S.L no se hace responsable del incumplimiento por parte del usuario del RGPD.</p>
                        <p>Retención de datos en conformidad a la LSSI Ecu Tuning informa de que, como prestador de servicio de alojamiento de datos y en virtud de lo establecido en la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), retiene por un periodo máximo de 12 meses la información imprescindible para identificar el origen de los datos alojados y el momento en que se inició la prestación del servicio. La retención de estos datos no afecta al secreto de las comunicaciones y sólo podrán ser utilizados en el marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a disposición de los jueces y/o tribunales o del Ministerio que así los requiera.</p>
                        <p>La comunicación de datos a las Fuerzas y Cuerpos del Estado se hará en virtud a lo dispuesto en la normativa sobre protección de datos personales.</p>
                        <p>Derechos propiedad intelectual https://www.ecutuning.com/</p>
                        <p>Ecu Tuning es titular de todos los derechos de autor, propiedad intelectual, industrial, "know how" y cuantos otros derechos guardan relación con los contenidos del sitio web https://www.ecutuning.com/ y los servicios ofertados en el mismo, así como de los programas necesarios para su implementación y la información relacionada.</p>
                        <p>No se permite la reproducción, publicación y/o uso no estrictamente privado de los contenidos, totales o parciales, del sitio web https://www.ecutuning.com/ sin el consentimiento previo y por escrito.</p>
                        <h5>Propiedad intelectual del software</h5>
                        <p>El usuario debe respetar los programas de terceros puestos a su disposición por Ecu Tuning, aún siendo gratuitos y/o de disposición pública.</p>
                        <p>Ecu Tuning dispone de los derechos de explotación y propiedad intelectual necesarios del software.</p>
                        <p>El usuario no adquiere derecho alguno o licencia por el servicio contratado, sobre el software necesario para la prestación del servicio, ni tampoco sobre la información técnica de seguimiento del servicio, excepción hecha de los derechos y licencias necesarios para el cumplimiento de los servicios contratados y únicamente durante la duración de los mismos.</p>
                        <p>Para toda actuación que exceda del cumplimiento del contrato, el usuario necesitará autorización por escrito por parte de Ecu Tuning, quedando prohibido al usuario acceder, modificar, visualizar la configuración, estructura y ficheros de los servidores propiedad de Ecu Tuning, asumiendo la responsabilidad civil y penal derivada de cualquier incidencia que se pudiera producir en los servidores y sistemas de seguridad como consecuencia directa de una actuación negligente o maliciosa por su parte.</p>
                        <h5>Propiedad intelectual de los contenidos alojados</h5>
                        <p>Se prohíbe el uso contrario a la legislación sobre propiedad intelectual de los servicios prestados por Ecu Tuning y, en particular de:</p>
                        <p>• La utilización que resulte contraria a las leyes españolas o que infrinja los derechos de terceros.</p>
                        <p>• La publicación o la transmisión de cualquier contenido que, a juicio de Ecu Tuning, resulte violento, obsceno, abusivo, ilegal, racial, xenófobo o difamatorio.</p>
                        <p>• Los cracks, números de serie de programas o cualquier otro contenido que vulnere derechos de la propiedad intelectual de terceros.</p>
                        <p>• La recogida y/o utilización de datos personales de otros usuarios sin su consentimiento expreso o contraviniendo lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.</p>
                        <p>• La utilización del servidor de correo del dominio y de las direcciones de correo electrónico para el envío de correo masivo no deseado.</p>
                        <p>El usuario tiene toda la responsabilidad sobre el contenido de su web, la información transmitida y almacenada, los enlaces de hipertexto, las reivindicaciones de terceros y las acciones legales en referencia a propiedad intelectual, derechos de terceros y protección de menores.</p>
                        <p>El usuario es responsable respecto a las leyes y reglamentos en vigor y las reglas que tienen que ver con el funcionamiento del servicio online, comercio electrónico, derechos de autor, mantenimiento del orden público, así como principios universales de uso de Internet.</p>
                        <p>El usuario indemnizará a Ecu Tuning por los gastos que generara la imputación de Ecu Tuning en alguna causa cuya responsabilidad fuera atribuible al usuario, incluidos honorarios y gastos de defensa jurídica, incluso en el caso de una decisión judicial no definitiva.</p>
                        <h5>Protección de la información alojada</h5>
                        <p>Ecu Tuning realiza copias de seguridad de los contenidos alojados en sus servidores, sin embargo no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los usuarios. De igual manera, no garantiza la reposición total de los datos borrados por los usuarios, ya que los citados datos podrían haber sido suprimidos y/o modificados durante el periodo del tiempo transcurrido desde la última copia de seguridad.</p>
                        <p>Los servicios ofertados, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados en las copias de seguridad realizadas por Ecu Tuning, cuando esta pérdida sea imputable al usuario; en este caso, se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario.</p>
                        <p>La reposición de datos borrados sólo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a causas atribuibles a Ecu Tuning.</p>
                        <h5>Comunicaciones comerciales</h5>
                        <p>En aplicación de la LSSI. Ecu Tuning no enviará comunicaciones publicitarias o promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.</p>
                        <p>En el caso de usuarios con los que exista una relación contractual previa, Ecu Tuning sí está autorizado al envío de comunicaciones comerciales referentes a productos o servicios de Ecu Tuning que sean similares a los que inicialmente fueron objeto de contratación con el cliente.</p>

                        <p>En todo caso, el usuario, tras acreditar su identidad, podrá solicitar que no se le haga llegar más información comercial a través de los canales de Atención al Cliente.</p>
                    </p></div>

            </div>
        </main>
    );
}