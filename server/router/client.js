import express from 'express';
import { clientLogin,clientSignUp,checkUser } from '../controller/client.js';

const router = express.Router()
router.post('/signup',clientSignUp)
router.post('/login',clientLogin)
router.post('/check',checkUser)

export default router