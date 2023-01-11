import { pool } from "../../../config/db.js";
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
  }
}

const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from product");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const [result] = await pool.query("Insert into product SET ?", {
      name,
      description,
      price,
    });
    console.log(result);
    return res
      .status(200)
      .json({ name, price, description, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
