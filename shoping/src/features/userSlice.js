import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    user:{},
    products:[]
}

const authSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            console.log(action)
            state.login=true;
            state.user=action.payload;
        },
        setLogOut:(state)=>{
            console.log("logining out!!")
            state.login=false;
            state.user={};
        },
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        setAddCart:(state,action)=>{
            // console.log('Pushing Data',action.payload)
            state.user.cart.push(action.payload);
        },
        removeUserCart:(state,action)=>{
            // console.log('Pushing Data',action.payload)
            state.user.cart=state.user.cart.filter((item)=>item.id!==action.payload.id);
        },
        setAddress:(state,action)=>{
            // console.log('Pushing Data',action.payload)
            state.user.address.push(action.payload);
        },
        setProducts:(state,action)=>{
            state.products=action.payload;
        },
        
    }
})

export const {setLogOut,setLogin,setUser,setProducts,setAddCart,setAddress,removeUserCart} = authSlice.actions;
export default authSlice.reducer;