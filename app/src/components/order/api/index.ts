import { Router } from "express";
import createOrder from "./createOrder";


const router = Router()

router
	.use(createOrder)

export default router