import os
from flask import Flask, jsonify
from flask import send_from_directory
from api.HelloWorlder import HelloWorlder
from api.GuestBook import GuestBook
from api.transit_timer.FrontrunnerFinder import FrontrunnerFinder
from api.transit_timer.BusFinder import BusFinder

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

@app.route('/api/guestbook/view')
def viewGuests():
    guestbook = GuestBook()
    guests = guestbook.viewAll()
    guest_string = ''
    for guest in guests:
        guest_string += "{}\r\n".format(guest['name'])
    return guest_string

@app.route('/api/guestbook/<name>')
def signIn(name):
    guestbook = GuestBook()
    guests = guestbook.signIn(name)
    return "{}\r\n".format(guest for guest in guests)

@app.route('/halloween/<path:path>')
def halloween(path):
    if path != "" and os.path.exists("halloween/" + path):
        print ('serving file: {}'.format(path))
        return send_from_directory('halloween/', path)
    else:
        print('serving index!')
        return send_from_directory('halloween', 'teamphotos.html')

@app.route('/uta')
def uta():
    return send_from_directory('transit/', 'uta.html')
        
@app.route('/api/transit/<path:commute>')
def getTime(commute):
    if commute == 'morning':
        ff = FrontrunnerFinder()
        times = ff.morning_commute()
        print('morning times: ')
        for time in times:
            print(time)
        time_str = ''
        for time in times:
            time_str += "{}\r\n ".format(time)
        print('time for morning commute: {}'.format(time_str))
        return time_str
        
    elif commute == 'afternoon':
        bf = BusFinder()
        times = bf.afternoon_commute()
        print('morning times: ')
        for time in times:
            print(time)
        time_str = ''
        for time in times:
            time_str += "{}\r\n".format(time)
        print('time for afternoon commute: {}'.format(time_str))
        return time_str
