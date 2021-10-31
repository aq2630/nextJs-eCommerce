import { getSession } from "next-auth/client";

const withProtect = (handler) => {
  return async (req, res) => {
    const session = await getSession({ req: req });

    if (!session) {
      return res.status(401).json({
        message: "Not Authenticated.",
      });
    }
    return handler(req, res);
  };
};

export default withProtect;
