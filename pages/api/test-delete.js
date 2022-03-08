import { connectToDatabase} from "../../services/database";

// remove data from monggodb
export default async (req, res) => {
  const db = await connectToDatabase();
  const { id } = req.query;
  const result = await db.collection("test").deleteOne({ _id: id });
  res.json(result);
};


