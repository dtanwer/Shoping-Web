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
    rating:{
        type:String,
    },
    price:{
        type:String,
        required:true,
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
    images:[],
    highlights:[],
    offers:[],
    options:[]

})

export const productModel=mongoose.model('products',productSchma)