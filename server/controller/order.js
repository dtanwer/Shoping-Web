import {orderModel} from '../model/Order.js'

export const getOrders=async (req,res)=>{
    const id=req.params.id;
    try {
        const resp=await  orderModel.find({vendorId:id})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error);
    }

}
export const getAllOrders=async (req,res)=>{
    try {
        const resp=await  orderModel.find()
        res.status(200).json(resp)
    } catch (error) {
        console.log(error);
    }

}
export const getUserOrders=async (req,res)=>{
    const id=req.params.id;
    try {
        const resp=await  orderModel.find({userId:id})
        res.status(200).json(resp);
    } catch (error) {
        console.log(error);
    }

}
export const addOrder=async (req,res)=>{
    try {
        const order=new  orderModel(req.body);
        await order.save();
        res.status(200).send("oder Saved");
    } catch (error) {
        console.log(error)
    }

}

export const updateOrders= async (req, res)=>{
    const id=req.params.id;
    const user = await orderModel.findByIdAndUpdate(id,req.body,{new:true});
    return res.status(200).json(user);
}