from flask import Flask, render_template,request,jsonify
import pickle
import numpy as np
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
import pandas as pd

app = Flask(__name__,template_folder="templates")



@app.route('/')
def index():
    return render_template("homepage.html")

@app.route('/quiz')
def quiz():
    return render_template("quiz.html")

@app.route('/main')
def main_quiz():
    return render_template("rate.html")

@app.route('/send_array', methods=['POST'])
def receive_array():
    try:
        with open('xg_boost', 'rb') as f:  
            model = pickle.load(f)
    except FileNotFoundError:
        return jsonify({"error": "Model not found", "message": "Please train the model first"})

    try:
        with open('transformer', 'rb') as f:  
            scaler = pickle.load(f)
    except FileNotFoundError:
        return jsonify({"error": "Scaler not found", "message": "Please check for the file"})
    
    try:
        with open('encoder', 'rb') as f:  
            encoder = pickle.load(f)
    except FileNotFoundError:
        return jsonify({"error": "Encoder not found", "message": "Please check for the file"})

    data = request.json  
    array = np.array(data.get('data'))  
    dataframe = pd.DataFrame(array.reshape(1, -1), columns=[
        'O_score', 'C_score', 'E_score', 'A_score', 'N_score',
        'Numerical_Aptitude', 'Spatial_Aptitude', 'Perceptual_Aptitude',
        'Abstract_Reasoning', 'Verbal_Reasoning'
    ])  

   
    array = scaler.transform(dataframe)

    prediction = model.predict(array)
    print(int(prediction[0]))


    return jsonify({
        "message": "Array received", 
        "array": str(encoder.inverse_transform(prediction)[0])
    })


if __name__ == '__main__':
    app.run(debug=True)