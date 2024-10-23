const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URL;
let db;

const connectDB = async () => {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    db = client.db(process.env.DB);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };