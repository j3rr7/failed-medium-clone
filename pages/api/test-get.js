import { connectToDatabase} from "../../services/database";

export default async (req, res) => {
  const db = await connectToDatabase();
  const { id } = req.query;
  const data = await db.collection("test").find().toArray();
  res.json(data);
};
