import mongoose from "mongoose";
import nextConnect from "next-connect";

async function database(req, res, next) {
  try {
    const connectMongo = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    req.dbClient = mongoose.connection;
    req.db = mongoose.connection.db;
    return next();
  } catch (error) {
    console.log("Error", error.message);
  }
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
