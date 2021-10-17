import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Order from "../../models/orderModel";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { name, email, phone, quantity, address, product } = req.body;
  const order = new Order({ name, email, phone, quantity, address, product });
  const createOrder = await order.save();
  res.status(201).json(createOrder);
});

export default handler;
