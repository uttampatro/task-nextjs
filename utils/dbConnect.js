import mongoose from 'mongoose';
require('dotenv').config();

const connection = {};

const dbConnect = async () => {
    try {
        if (connection.isConnected) {
            return;
        }
        const db = await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection.isConnected = db.connections[0].readyState;
        // console.log(connection.isConnected);
    } catch (error) {
        console.log(error);
    }
};

export default dbConnect;
