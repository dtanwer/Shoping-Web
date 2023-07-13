import express from 'express';
import { clientLogin,clientSignUp,checkUser,addToCart,addAddress,removeToCart,removeAddress } from '../controller/client.js';

const router = express.Router()
router.post('/signup',clientSignUp)
router.post('/login',clientLogin)
router.post('/check',checkUser)
router.post('/addCart/:id',addToCart)
router.put('/removeCart/:id',removeToCart)
router.post('/addAddress/:id',addAddress)
router.put('/removeAddress/:id',removeAddress)

export default router