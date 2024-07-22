import { MongoClient, ServerApiVersion } from "mongodb";

require("dotenv").config({ path: ".env.local" });
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;


