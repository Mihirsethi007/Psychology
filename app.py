from flask import Flask, render_template

app = Flask(__name__,template_folder='templates', static_folder='static')
 
# @app.route("/")
# def welcome():
#     return render_template('starter.html')
 
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/index3')
def btsp():
    return render_template('index3.html')

@app.route('/demo1')
def demo():
    return render_template('demo1.html')

@app.route('/index4')
def id4():
    return render_template('index4.html')
 
if __name__ == "__main__":
    app.run()
    # app.run(debug=True, host='localhost', port=5001)