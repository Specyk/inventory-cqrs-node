import { Router } from "express";
import queries from "./queries";


const router = Router()
router.use(queries)

export default router