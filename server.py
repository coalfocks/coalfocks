import os
from flask import Flask, jsonify
from flask import send_from_directory
from api.HelloWorlder import HelloWorlder
#from api.GuestBook import GuestBook

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

@app.route('/api/guestbook/<name>')
def signIn(name):
    #guestbook = GuestBook()
    #guests = guestbook.signIn(name)
    #return "{}\r\n".format(guest for guest in guests)
    return 'hi'


@app.route('/halloween/<path:path>')
def halloween(path):
    if path != "" and os.path.exists("halloween/" + path):
        print ('serving file: {}'.format(path))
        return send_from_directory('halloween/', path)
    else:
        print('serving index!')
        return send_from_directory('halloween', 'teamphotos.html')
