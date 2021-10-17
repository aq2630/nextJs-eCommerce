import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectMongo = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo Db is Connected ${connectMongo.connection.host}`);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default connectDb;
