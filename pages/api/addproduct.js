import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import withProtect from "../../middleware/withProtect";
import Product from "../../models/productModel";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { title, image, category, description, price, delivery } = req.body;
  const product = new Product({
    title,
    image,
    category,
    description,
    price,
    delivery,
  });
  const createProduct = await product.save();
  res.status(201).json({ data: createProduct });
});

export default withProtect(handler);
