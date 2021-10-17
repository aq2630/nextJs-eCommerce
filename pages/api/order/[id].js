import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import Order from "../../../models/orderModel";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const order = await Order.findById(req.query.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    res.json({ message: "Order not found" });
  }
});

export default handler;
