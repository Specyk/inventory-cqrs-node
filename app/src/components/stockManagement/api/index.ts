import { Router } from "express";
import sellProducts from "./sellProducts";
import restockProduct from "./restockProduct";


const router = Router()

router
	.use(sellProducts)
	.use(restockProduct)

export default router