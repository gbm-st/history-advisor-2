import json
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin  #Para poder atender las peticiones localmente
from flask import render_template
from flask import abort, jsonify
from persontext import predict_personalidad
from werkzeug.utils import redirect
import os

app = Flask(__name__, template_folder="template", static_folder="static")

#Para poder atender las peticiones locales
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

APP_ROOT=os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def home():
    """
    Página inicial
    """
    return render_template("inicio_aplicacion.html")

@app.route('/apertura.html')
def apertura():
    return render_template("apertura.html")

@app.route('/prehistoria/prehistoria.html')
def prehistoria():
    return render_template("prehistoria/prehistoria.html")

@app.route('/independencia_mexico/independencia_mexico.html')
def independencia_mexico():
    return render_template("independencia_mexico/independencia_mexico.html")

@app.route('/guerra_mundial_2/guerra_mundial_2.html')
def guerra_mundial_2():
    return render_template("/guerra_mundial_2/guerra_mundial_2.html")

@app.route('/stonehenge/stonehenge.html')
def prehistoria_2():
    return render_template("stonehenge/stonehenge.html")

@app.route('/benito_juarez/benito_juarez.html')
def independencia_mexico_2():
    return render_template("benito_juarez/benito_juarez.html")

@app.route('/revolucion_industrial/revolucion_industrial.html')
def guerra_mundial_2_2():
    return render_template("/revolucion_industrial/revolucion_industrial.html")

#@app.route('/anylink')
#def anylink():
#    pass

@app.errorhandler(404)
def resource_not_found(e):
    return jsonify(error=str(e)), 404

# @app.route('/persontext/<texto>',methods=["GET","POST"])
# @cross_origin() #Para poder atender las peticiones locales
# def persontext(texto):
#     datos = {}
#     prediccion = predict_personalidad(texto.lower())
#     datos["presenta_apertura"] = prediccion
#     return datos

@app.route('/persontext/<texto>',methods=["GET","POST"])
@cross_origin() #Para poder atender las peticiones locales
def persontext(texto):
    datos = {}
    prediccion = predict_personalidad(texto.lower())
    datos["presenta_apertura"] = prediccion
    # print(jsonify(datos))
    return jsonify(datos)

if __name__ == "__main__":
   app.run() ##Replaced with below code to run it using waitress 
   #serve(app, host='0.0.0.0', port=5000, url_scheme='https')