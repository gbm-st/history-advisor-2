import numpy as np
import tensorflow as tf
import io
import json
import keras
from keras.models import Sequential
from keras import layers
from keras.preprocessing.text import Tokenizer
#from keras.preprocessing.sequence import pad_sequences
from keras.utils import pad_sequences



# Creamos la lista de clases
clases = ['No','Sí']

modelo_personalidad = tf.keras.models.load_model("persontext_lstmsimple_apertura.h5")


def crear_tokenizer():
    f = open('datos_dicc.json')
    # returns JSON object as a dictionary
    datos_dicc2 = json.load(f)
    datos_dicc2 = json.dumps(datos_dicc2)
    tokenizer = keras.preprocessing.text.tokenizer_from_json(datos_dicc2)
    return tokenizer


def predict_personalidad(texto):
    tokenizer = crear_tokenizer()
    word_index = tokenizer.word_index
    total_unique_words = len(tokenizer.word_index) + 1 

    max_words = total_unique_words
    max_len = 193 #max_seq_length
    
    sequence = tokenizer.texts_to_sequences([texto])
    test = pad_sequences(sequence, maxlen=max_len)
    return clases[np.around(modelo_personalidad.predict(test), decimals=0).argmax(axis=1)[0]]