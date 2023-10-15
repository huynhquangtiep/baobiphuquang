import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Đọc biến môi trường từ tệp .env

const { MONGODB_URL } = process.env;

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, configOptions);
    console.log('Ecommerce database connected successfully!');
  } catch (err) {
    console.log(`Getting Error from DB connection ${err.message}`);
  }
};

export default connectToDB;