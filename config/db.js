import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

connectDB().catch((err) => console.log(err));

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
