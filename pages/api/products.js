import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Product from "../../models/productModel";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dwnjvxbtv",
  api_key: "339673952128887",
  api_secret: "LSyvrCAjW2UPDsCLOl4FV_4w1bE",
});

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let imageUrl;

  cloudinary.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    async (result, error) => {
      imageUrl = await result.url;
      let prod = new Product({
        name: "try saving product",
        image: imageUrl,
        price: 5000,
        description: "This is dummy product Description",
        category: "dummy category",
      });
      const newProduct = await prod.save();
      res.json(newProduct);
    }
  );
});

export default handler;
