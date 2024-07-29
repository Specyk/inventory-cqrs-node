import { Router } from "express";
import getProducts from "./getProducts";


const router = Router()

router.use(getProducts)

export default router