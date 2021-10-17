import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    product: {
      title: { type: String, required: true },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
