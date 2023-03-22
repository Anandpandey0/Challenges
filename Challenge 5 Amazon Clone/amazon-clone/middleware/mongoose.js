import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://anand0:anand0@amazon.nptltew.mongodb.net/?retryWrites=true&w=majority"
  );
  // console.log("Connected to database");
};

export default connectDb;
