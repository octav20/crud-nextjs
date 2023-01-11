// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "../../config/db";
export default async function handler(req, res) {
  const result = await pool.query("select now()");
  console.log(result);
  res.status(200).json({ name: "John Doe" });
}
