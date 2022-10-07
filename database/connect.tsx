const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDatabase = (callback) => {
  if (database) {
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((error) => {
      callback(error);
    });
};

const getDatabase = () => {
  if (!database) {
    throw Error('Database not connected');
  }
  return database;
};

module.exports = {
  initDatabase,
  getDatabase,
};