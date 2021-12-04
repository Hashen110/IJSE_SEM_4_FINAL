from flask import Flask, redirect
from flask.templating import render_template

application = Flask(__name__, static_url_path='', static_folder='static')


@application.route("/")
def index():
    return render_template("index.html")

@application.errorhandler(404)
def handle_404(e):
    # handle all other routes here
    return redirect('/')


if __name__=="__main__":
    application.run(debug=True)
