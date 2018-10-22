from pymongo import MongoClient

class MongoConnection:
    def __init__(self):
        #try/catch, add default
        self.client = MongoClient()

    def getDb(self, db):
        return self.client[db]

    def __del__(self):
        #close connection
        pass
