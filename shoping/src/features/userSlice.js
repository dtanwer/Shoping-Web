import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    user:{},
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
        }
    }
})

export const {setLogOut,setLogin,setUser} = authSlice.actions;
export default authSlice.reducer;