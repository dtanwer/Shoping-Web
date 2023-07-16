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
    productName: {
        type: String,
        require: true
    },
    userName: {
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
    },
    status:{
        type:String,
        default:"ordered"
    },
    price:{
        type:String,
        required:true,
    }
},
    { timestamps: true }
)

export const orderModel = mongoose.model('orders', orderSchma)