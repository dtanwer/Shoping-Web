import express from 'express';
import { addOrder,getOrders,getUserOrders,updateOrders,getAllOrders} from '../controller/order.js';

const router = express.Router()
router.get('/',getAllOrders)
router.get('/:id',getOrders)
router.put('/:id',updateOrders)
router.get('/user/:id',getUserOrders)
router.post('/add',addOrder)
export default router