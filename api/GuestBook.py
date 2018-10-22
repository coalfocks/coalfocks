import time
from .db.dbInstance import DBInstance

class GuestBook:

    def __init__(self):
        self.db = DBInstance('basic', False)
        self.db.setCollection('basic')
    
    def signIn(self, name):
        # insert
        self.db.insertOne({ 'name': name })
        # return whole collection
        guests = self.db.showCollection()
        return [guest for guest in guests]

    def viewAll(self):
        guests = self.db.showCollection()
        return guests
        
        
