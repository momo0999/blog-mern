import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DEV_DB_PORT = process.env.DEV_DB_PORT || '27017';
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}:${DEV_DB_PORT}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exits(1);
  }
};

export default connectDB;
