import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Product from "../../models/productModel";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const allProducts = await Product.find();
  res.status(201).json(allProducts);
});

export default handler;
