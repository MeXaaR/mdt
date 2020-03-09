import { MongoInternals, Mongo } from 'meteor/mongo';

export const collections = {};
const publications = [];

Meteor.startup(async () => {
  const internals = await MongoInternals.defaultRemoteCollectionDriver();
  const { db } = internals.mongo;
  const collectionsData = await db.listCollections();
  collectionsData.each((n, collection) => {
    if (collection) {
      collections[`${collection.name}`] = internals.open(collection.name);
    }
  });
});

Meteor.methods({
  'MDT.getCollections': () => collections,
  'MDT.updateItem': ({
    key, value, collection, itemId,
  }) => {
    try {
      return collections[collection].update({ _id: itemId }, { $set: { [key]: value } });
    } catch ({ err }) {
      throw new Meteor.Error(err.code, err.errmsg);
    }
  },
  'MDT.deleteItem': ({ itemId, collection }) => {
    try {
      return collections[collection].remove({ _id: itemId });
    } catch ({ err }) {
      throw new Meteor.Error(err.code, err.errmsg);
    }
  },
  'MDT.duplicateItem': ({ itemId, collection }) => {
    try {
      const item = collections[collection].findOne({ _id: itemId });
      delete item._id;
      return collections[collection].insert({ _id: new Mongo.ObjectID()._str, ...item });
    } catch ({ err }) {
      throw new Meteor.Error(err.code, err.errmsg);
    }
  },
});

Meteor.publish('MDT.autopublish', () => Object.keys(collections).map((name) => collections[name].find()));

// Methods Meteor
// default_server.publish_handlers: get all publications
// default_server.method_handlers: get all methods
