import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {  
  serviceCollection : "service-car"
}

export default function dbConnet(collctionName) {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collctionName)
}
