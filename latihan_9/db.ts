import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://nugrahalazuardim:xnbwqhIjhbuyaUvU@clusteralpinia.0i8fh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAlpinia');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error', error);
  }
};

export default connectDB;
