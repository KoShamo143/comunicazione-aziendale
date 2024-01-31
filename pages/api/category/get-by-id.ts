// Alexis Rossi
// Here we send back the user object by given ID in the request.
import { Category } from "@/models/categoryModel";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
//import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  /*
  const session = await getServerSession(req, res, authOptions);

  if (!session || session.user.role === 0) {
    return res.status(401).json({ error: "Unauthorized" });
  }
*/
  const { categoryId } = req.body;

  if (!categoryId) {
    return res.status(400).json({ error: "Missing arguments" });
  }

  try {
    const user = await Category.findById(categoryId);

    res.status(200).json({ message: user });
  } catch (err: any) {
    return res.status(500).json({ error: "Error in server" });
  }
}
