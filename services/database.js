import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://medium-clone:anakgame@cluster0.h69vw.mongodb.net/dbMedium?retryWrites=true&w=majority"
const options = {}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 * https://github.com/vercel/next.js/pull/17666
 */
global.mongo = global.mongo || {};

export const connectToDatabase = async () => {
  if (global.mongo.db) {
    return global.mongo.db;
  }
  const driver = new MongoClient(uri)
  const client = await driver.connect();
  const db = client.db();

  global.mongo.db = db;

  return db;
};