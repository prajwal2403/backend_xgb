from flask import Flask, render_template,request,jsonify
import pickle
import numpy as np
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
import pandas as pd

app = Flask(__name__,template_folder="bootstrap")

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
    except:
        return jsonify({"error": "Model not found", "message": "Please train the model first"})

    try:
        with open('transformer', 'rb') as f:
            scaler = pickle.load(f)
    except:
        return jsonify({"error": "Scaler not found", "message": "Please check for the file"})   
    try:
        with open('encoder (1)', 'rb') as f:
            encoder = pickle.load(f)
    except:
        return jsonify({"error": "Encoder not found", "message": "Please check for the file"})
    data = request.json  # Receive the data as JSON
    array = np.array(data.get('data'))  # Access the array from the JSON object
    dataframe = pd.DataFrame(array.reshape(1, -1), columns=['O_score','C_score','E_score','A_score','N_score',
                                         'Numerical Aptitude','Spatial Aptitude','Perceptual Aptitude',
                                         'Abstract Reasoning','Verbal Reasoning'])  # Access the array from the JSON object
# print('Received array:', array)
    array = scaler.transform(dataframe)
        # Process the array here
    print(int(model.predict(array)[0]))
    return jsonify({"message": "Array received", "array": str(encoder.inverse_transform(model.predict(array))[0])})


if __name__ == '__main__':
    app.run(debug=True)