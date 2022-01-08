import base64
import os
import uuid
from datetime import datetime

from flask import Flask, redirect, render_template, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

application = Flask(__name__, static_url_path='', static_folder='static')
CORS(application)
DB_URL = 'sqlite:///test.db'
if 'RDS_HOSTNAME' in os.environ:
    DB_URL = 'mysql+pymysql://admin:admin1234@aa1niiojyscgb4i.cvkgxupgoucw.us-west-2.rds.amazonaws.com:3306/' + os.environ['RDS_DB_NAME']
application.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(application, session_options={"autoflush": False})


class User(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.Integer, nullable=False)
    token = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return '<User %r>' % self.username


class Watch(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    type = db.Column(db.String(255), nullable=False)
    tmdb_id = db.Column(db.Integer, nullable=False)
    imdb_id = db.Column(db.String(255))
    content = db.Column(db.JSON)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    user_id = db.Column(db.String(255), db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('watches', lazy=True))

    def __repr__(self):
        return '<Watch %r>' % self.tmdb_id


class Search(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    search = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    user_id = db.Column(db.String(255), db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('searches', lazy=True))

    def __repr__(self):
        return '<Search %r>' % self.tmdb_id


class Like(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    type = db.Column(db.String(255), nullable=False)
    like = db.Column(db.Boolean, nullable=False)
    tmdb_id = db.Column(db.Integer, nullable=False)
    imdb_id = db.Column(db.String(255))
    content = db.Column(db.JSON)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    user_id = db.Column(db.String(255), db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('likes', lazy=True))

    def __repr__(self):
        return '<Like %r>' % self.tmdb_id


db.create_all()


@application.route("/")
def index():
    return render_template("index.html")


@application.route('/api/signup', methods=['POST'])
def signup():
    json = request.get_json(force=True)
    if json['username'] is not None and json['password'] is not None:
        users = User.query.filter_by(username=json['username']).all()
        if users is not None:
            if len(users) != 0:
                return {'error': 'Username has already taken'}
        encoded_password = base64.b64encode(str(json['password']).encode('ascii'))
        user = User(id=uuid.uuid4().hex, username=json['username'], password=encoded_password,
                    token=uuid.uuid4().hex, age=json['age'], gender=json['gender'])
        db.session.add(user)
        db.session.commit()
        return {'token': user.token}
    return {'error': 'Invalid username or password'}


@application.route('/api/validate/token', methods=['POST'])
def validate_token():
    json = request.get_json(force=True)
    if json['token'] is not None:
        user = User.query.filter_by(token=json['token']).first()
        if user is not None:
            return {
                'validate': True,
                'user': {
                    'username': user.username,
                    'age': user.age,
                    'gender': user.gender,
                    'token': user.token,
                    'timestamp': user.timestamp
                }
            }
    return {'validate': False}


@application.route('/api/login', methods=['POST'])
def login():
    json = request.get_json(force=True)
    encoded_password = base64.b64encode(str(json['password']).encode('ascii'))
    user = User.query.filter_by(username=json['username'], password=encoded_password).first()
    if user is None:
        return {'token': None}
    return {'token': user.token}


@application.route('/api/watch', methods=['POST'])
def watch():
    json = request.get_json(force=True)
    user = get_user(request.headers.get('Authorization'))
    if user is not None:
        watch_obj = Watch(id=uuid.uuid4().hex, type=json['type'], tmdb_id=json['id'], imdb_id=json['imdb_id'],
                          user=user, content=json['content'])
        user.watches.append(watch_obj)
        db.session.add(user)
        db.session.commit()
    return ''


@application.route('/api/like', methods=['POST'])
def like():
    json = request.get_json(force=True)
    user = get_user(request.headers.get('Authorization'))
    if user is not None:
        like_obj = Like(id=uuid.uuid4().hex, type=json['type'], like=json['like'], tmdb_id=json['id'],
                        imdb_id=json['imdb_id'], user=user, content=json['content'])
        user.likes.append(like_obj)
        db.session.add(user)
        db.session.commit()
    return ''


@application.route('/api/search', methods=['POST'])
def search():
    json = request.get_json(force=True)
    user = get_user(request.headers.get('Authorization'))
    if user is not None:
        search_obj = Search(id=uuid.uuid4().hex, search=json['search'], user=user)
        user.searches.append(search_obj)
        db.session.add(user)
        db.session.commit()
    return ''


@application.errorhandler(404)
def handle_404():
    return redirect('/')


@application.errorhandler(500)
def handle_500():
    return redirect('/')


def get_user(token):
    if token is not None:
        return User.query.filter_by(token=token).first()
    return None


if __name__ == "__main__":
    if 'RDS_HOSTNAME' in os.environ:
        application.run(debug=False)
    else:
        application.run(debug=True)
