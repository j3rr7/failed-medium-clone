import { MongoClient } from "mongodb";
import db, { insertTest } from "../../services/database";
import nc from "next-connect";

const handler = nc();

handler.use(db);

export default handler.get(async (req, res) => {
  const { db } = req;
  const collection = db.collection("Test");
  const result = await collection.insertOne({ name: "Testing" });
  res.json(result);
});

/*
export default async function handler(req, res) {

    const client = await MongoClient.connect("mongodb+srv://medium-clone:anakgame@cluster0.h69vw.mongodb.net/dbMedium?retryWrites=true&w=majority");
    const db = client.db();
    const yourCollection = db.collection("Test");
    const result = await yourCollection.insertOne({ msg : "Hello World" });
    console.log(result);
    await client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
}*/
