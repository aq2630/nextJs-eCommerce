import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectDb from "../../../utils/dbConnect";
import User from "../../../models/userModel";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        connectDb();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No User Found");
        }

        const isValid = await user.matchPassword(credentials.password);

        if (!isValid) {
          throw new Error("Password Incorrect");
        }

        return { email: user.email };
      },
    }),
  ],
});
