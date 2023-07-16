import express from 'express';
import {
    addProduct,
    updateProduct,
    getDraftProductsWithOwner,
    getProduct,
    getProducts,
    getProductsByOwner,
    deleteProduct,
    getProductsByCategory
} from '../controller/product.js'
const router = express.Router()
router.get('/', getProducts)
router.get('/category/:name', getProductsByCategory)
router.get('/:id', getProduct)
router.get('/vendor/:vendorId', getProductsByOwner)
router.get('/vendorDraft/:vendorId', getDraftProductsWithOwner)
router.post('/add', addProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router