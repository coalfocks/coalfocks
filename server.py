import os
from flask import Flask, jsonify
from flask import send_from_directory
from api.HelloWorlder import HelloWorlder

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
#@app.route('/<path:path>')
def index(path):
    if path != "" and os.path.exists("static/homepage/build/" + path):
        print ('serving file: {}'.format(path))
        return send_from_directory('static/homepage/build', path)
    else:
        print('serving index!')
        return send_from_directory('static/homepage/build', 'index.html')

@app.route('/eventrsvp/<path:path>')
def rsvp(path):
    if path != "" and os.path.exists("eventrsvp/" + path):
        print ('serving file: {}'.format(path))
        return send_from_directory('eventrsvp/', path)
    else:
        print('serving index!')
        return send_from_directory('eventrsvp', 'index.html')

@app.route('/api/helloworld')
def hello():
    hello = HelloWorlder()
    return jsonify({'response': hello.do()}) 
