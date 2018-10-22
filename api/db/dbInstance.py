from .mongoConnection import MongoConnection
from .mlabConnection import MlabConnection

class DBInstance:
    def __init__(self, db_name, use_local):
        if use_local:
            client = MongoConnection()
        else:
            client = MlabConnection()
        self.db = client.getDb(db_name)


    # try/catches

    # set class-wide collection
    def setCollection(self, collection):
        self.collection = collection

    # unset class-wide collection
    def unsetCollection(self):
        self.collection = None

    # insert one
    def insertOne(self, doc, collection=None):
        if not collection:
            collection = self.collection
        coll = self.db[collection]
        return coll.insert_one(doc)

    # insert many
    def insertMany(self, docs, collection=None):
        if not collection:
            collection = self.collection
        coll = self.db[collection]
        return coll.insert_many(docs)

    # get one
    def getOne(self, query, collection=None):
        if not collection:
            collection = self.collection
        coll = self.db[collection]
        return coll.find_one(query)

    # get many
    def getMany(self, query, collection=None):
        if not collection:
            collection = self.collection
        coll = self.db[collection]
        result = coll.find(query)
        return [r for r in result]

    # get count
    def getCount(self, collection=None):
        if not collection:
            collection = self.collection
        coll = self.db[collection]
        return coll.count()

    # get whole collection
    def showCollection(self, collection=None):
        if not collection:
            collection = self.collection
        coll = self.db[collection]
        return list(coll.find())

    # for query builder class

    # sort
    # AND
    # OR
    # push
    # addtoset
    # pop
    # LIKE
