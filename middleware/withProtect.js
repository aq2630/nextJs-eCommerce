import jwt from "jsonwebtoken";
import User from "../models/userModel";
import connectDb from "../utils/dbConnect";

connectDb();

const withProtect = (handler) => {
  return async (req, res) => {
    // Get token and check if it exists
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
    }

    if (!token) {
      return res.status(401).json({
        message: "Please log in to get access.",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      return handler(req, res);
    } catch (error) {
      console.log("catch error", error);
      res.status(401).json({ message: "Token Failed" });
    }
  };
};

export default withProtect;
