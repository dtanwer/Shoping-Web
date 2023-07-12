import mongoose from 'mongoose'
const ClientSchma = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    img: {
        type: String,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
    },
    address: {
        type: String
    },
    password: {
        type: String,
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
    { timestamps: true }
)

export const clientModel = mongoose.model('clients', ClientSchma)