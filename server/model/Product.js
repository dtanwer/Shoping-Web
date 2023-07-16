import mongoose from 'mongoose'
const productSchma=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true,
    },
    rating:{
        type:String,
    },
    price:{
        type:String,
        required:true,
    },
    discountPercentage:{
        type:String,
    },
    mrp:{
        type:String,
        required:true,
    },

    img:{
        type:String,
        required:true,
    },
    stock:{
        type:String,
    },

    vendorId:{
        type:String,
        required:true,
    },
    isDraft:{
        type:Boolean,
        required:true,
    },
    isDelete:{
        type:Boolean,
        default:false
    },
    images:[],
    highlights:[],
    offers:[],
    options:[]

})

export const productModel=mongoose.model('products',productSchma)