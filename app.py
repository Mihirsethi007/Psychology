from flask import Flask, render_template

app = Flask(__name__,template_folder='templates', static_folder='static')
 
# @app.route("/")
# def welcome():
#     return render_template('starter.html')
 
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/]')
def btsp():
    return render_template('index3.html')
 
if __name__ == "__main__":
    app.run()