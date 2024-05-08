const mongoose = require('mongoose')
const { DB_URL } = require('../config/config')

const connectToDatabase = async () => {
    await mongoose.connect(DB_URL)
    console.log("Connected to db successfully")
}

module.exports = connectToDatabase