// Alexis Rossi, Edoardo Barlassina 27-31/1/2024
import { CategoryAPIProps, CategoryType } from "@/types/categoryTypes";
import { Category } from "@/models/categoryModel";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session || session.user.role === 0) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { data, selectedColor }: CategoryAPIProps = req.body;

  if (!data.name || !data.description || !selectedColor) {
    return res.status(400).json({ message: "Missing arguments" });
  }

  try {
    // Check if the name is already registered
    const existingCategory = await Category.findByName(data.name);
    if (existingCategory) {
      return res.status(400).json({ message: "Invalid name" });
    }

    // Create a new Category in the database
    await Category.createCategory(data.name, data.description, selectedColor);

    res.status(201).json({ message: "OK" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
