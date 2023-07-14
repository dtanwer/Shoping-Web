import mongoose from 'mongoose'
const orderSchma = new mongoose.Schema({
    vendorId: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    productId: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
)

export const orderModel = mongoose.model('orders', orderSchma)