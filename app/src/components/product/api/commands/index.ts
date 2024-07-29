import { Router } from "express";
import createProduct from "./createProduct";


const router = Router()

router.use(createProduct)

export default router