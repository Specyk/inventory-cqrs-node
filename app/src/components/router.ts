import { Router } from "express";
import api from "./stockManagement/api";


const router = Router()
router.use(api)

export default router