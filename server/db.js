const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.MONGODB_URL;


module.exports = async () => {
    try {
        await mongoose.connect(
            URL,         
            {}
        );
        
        console.log("Connected to database.");

    }catch(err) {
        console.log("Could not connect to database", err);
    }
}