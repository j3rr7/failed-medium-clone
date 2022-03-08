import { connectToDatabase} from "../../services/database";

export default async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("test");
  const result = await collection.insertOne({
    name: "test",
    desc: "test Insert"
  });
  res.json(result);
};