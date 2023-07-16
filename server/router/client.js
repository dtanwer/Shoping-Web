import express from 'express';
import { clientLogin,updateClient,disableClient,clientSignUp,checkUser,addToCart,addAddress,removeToCart,removeAddress,getAllVendor,getAllUser } from '../controller/client.js';

const router = express.Router()
router.get('/vendor',getAllVendor)
router.get('/user',getAllUser)
router.post('/signup',clientSignUp)
router.post('/login',clientLogin)
router.post('/check',checkUser)
router.post('/addCart/:id',addToCart)
router.put('/removeCart/:id',removeToCart)
router.put('/disable/:id',disableClient)
router.put('/update/:id',updateClient)
router.post('/addAddress/:id',addAddress)
router.put('/removeAddress/:id',removeAddress)

export default router