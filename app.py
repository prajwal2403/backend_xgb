from flask import Flask, render_template
app = Flask(__name__,template_folder="bootstrap")

@app.route('/')
def index():
    return render_template("homepage.html")

@app.route('/quiz')
def quiz():
    return render_template("quiz.html")

@app.route('/main')
def main_quiz():
    return render_template("main_quiz.html")


if __name__ == '__main__':
    app.run(debug=True)
    app.run(debug=True)