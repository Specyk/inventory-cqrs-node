import { Router } from "express";
import getProducts from "./getProducts";
import createProduct from "./createProduct";



const router = Router()

router
	.use(getProducts)
	.use(createProduct)

export default router