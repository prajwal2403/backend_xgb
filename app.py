from flask import Flask, render_template,request,jsonify
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
    data = request.json  # Receive the data as JSON
    array = data.get('data')  # Access the array from the JSON object
    print('Received array:', array)
    # Process the array here
    return jsonify({"message": "Array received", "array": array})


if __name__ == '__main__':
    app.run(debug=True)