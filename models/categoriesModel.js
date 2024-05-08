const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema(
    {
        productName: {
            type: String, 
            required: true,
        },
        company: {
            type: String,
            enum: ["AMZ", "FLP", "SNP", "MYN", "AZO"]
        },
        productType: {
            type: String,
            enum: ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"],
            caseInsensitive: true
        },
        price: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required:true,
            min: 0,
            max: 10,
        },
        discount: {
            type: Number,
            required: true,
        },
        availability: {
            type: String,
            enum: ["yes", "out-of-stock"]
        }

    }
)

module.exports = mongoose.model('product', productsSchema)