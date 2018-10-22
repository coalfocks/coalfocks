import pymongo
import os

class MlabConnection:
    def __init__(self):
        pass

    def getDb(self, db):
        uri = os.environ['DB_URI']
        try:
            self.client = pymongo.MongoClient(uri)
            self.db = self.client.get_default_database()
            return self.db
        except:
            return None

    def __del__(self):
        #close connection
        self.client.close()

    
