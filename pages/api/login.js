import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import generateToken from "../../utils/generateToken";
import User from "../../models/userModel";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

export default handler;
