import { Router } from "express";
import productsApi from "./products/api";


const router = Router()

router.use(productsApi)

export default router