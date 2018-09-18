import os
from flask import Flask
from flask import send_from_directory

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    if path != "" and os.path.exists("static/homepage/build/" + path):
        print ('serving file: {}'.format(path))
        return send_from_directory('static/homepage/build', path)
    else:
        print('serving index!')
        return send_from_directory('static/homepage/build', 'index.html')

@app.route('/rsvp')
def rsvp():
    return send_from_directory('eventrsvp', 'index.html')
