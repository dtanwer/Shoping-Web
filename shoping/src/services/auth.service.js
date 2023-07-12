import axios from "axios";
export const loginUser=  (data)=>axios.post('http://localhost:5000/auth/login',data);
export const signUpUser=  (data)=>axios.post('http://localhost:5000/auth/signup',data);
export const checkUser=  (data)=>axios.post('http://localhost:5000/auth/check',data);