import { Router } from "express";
import stockManagementApi from "./stockManagement/api";
import productApi from "./product/api";
import orderApi from "./order/api";


const router = Router()
router
	.use(stockManagementApi)
	.use(productApi)
	.use(orderApi)

export default router
