// Paolo Bianchessi, 29/10/2023
// The following code provides the methods about the posts

import { db } from "./db";
import { RowDataPacket } from "mysql2";
import { CategoryType } from "@/types/categoryTypes";

/**
 * This object is responsible for all the db interaction methods
 * about the Post
 */
const Post = {
  /**
   * Creating a post defining all its values.
   */
  createPost: async (
    title: string,
    description: string,
    startDate: string,
    endDate: string
    ): Promise<boolean> => {
      await db
      .promise()
      .query(
        "INSERT INTO admins (title, description, startDate, endDate) VALUES (?, ?, ?, ?)",
        [title, description, startDate, endDate]
      );

    return true;
  },
  delete: async (
    id: number
    ): Promise<void> => {
    await db.promise().query("DELETE FROM posts WHERE id = ?", [id]);
  },
  edit: async (
    id: number,
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ): Promise<boolean> => {
    await db
      .promise()
      .query<RowDataPacket[]>(
        "UPDATE categories SET title = ?, description = ?, startDate = ?, endDate = ? WHERE id = ?",
        [title, description, startDate, endDate, id]
      );
    return true;
  },
  listAll: async (): Promise<PostType[]> => {
    const [rows] = await db
      .promise()
      .query<RowDataPacket[]>("SELECT * FROM posts");
    return rows as PostType[];
  },
};
