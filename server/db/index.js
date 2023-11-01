const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_TEMP_URI)
        console.log("MongoDB connected: ", connect.connection.host);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB; 