import { Router } from "express";
import productsApi from "./product/api";


const router = Router()

router.use(productsApi)

export default router