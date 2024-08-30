
import { mongoose } from 'mongoose';

export async function dbConnect() {

    try {
        const conn = await mongoose.connect(String(process.env.MONGO_URL))
        console.log("connected")
        return conn;
    } catch (error) {
        console.log(error);
    }
}