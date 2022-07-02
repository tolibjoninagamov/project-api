import express from "express";

import {
  getProducts,
  createProduct,
  deleteProduct,
  getOneProduct,
  updateProduct
} from "../controllers/product.js";
const router = express.Router()


router.get('/products', getProducts)
router.post('/products', createProduct)
router.get('/products/:id', getOneProduct)
router.delete('/products/:id', deleteProduct)
router.put('/products/:id', updateProduct)

export default router;