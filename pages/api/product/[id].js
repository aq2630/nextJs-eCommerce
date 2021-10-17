import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import Product from "../../../models/productModel";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const product = await Product.findById(req.query.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    res.json({ message: "Product not found" });
  }
});

export default handler;
