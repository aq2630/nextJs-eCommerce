import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import withProtect from "../../middleware/withProtect";
import Product from "../../models/productModel";
// import Category from "../../models/categoryModel";

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

  const prodObj = await product.save();

  // for category setting
  // let productId = prodObj._id;

  // let categoryObj = await Category.findOneAndUpdate(
  //   { _id: categoryId },
  //   { $push: { products: productId } },
  //   { new: true }
  // );

  // await category.save();

  res.status(201).json({ data: prodObj });
});

export default withProtect(handler);
