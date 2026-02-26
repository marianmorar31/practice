import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo: MongoMemoryServer;

export const connectTestDB = async (): Promise<void> => {

  mongo = await MongoMemoryServer.create();

  const uri = mongo.getUri();

  await mongoose.connect(uri);

};

export const disconnectTestDB = async (): Promise<void> => {

  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  if (mongo) {
    await mongo.stop();
  }

};