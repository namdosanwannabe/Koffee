import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Optional: Direct collection access
        const productsCollection = conn.connection.db.collection('products');

        return {
            connection: conn,
            productsCollection
        };
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;