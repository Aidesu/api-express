import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

connectDB().catch((err) => console.log(err));

export async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
