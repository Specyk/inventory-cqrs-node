import { Router } from "express";
import queries from "./queries";
import commands from "./commands";


const router = Router()
router.use(queries, commands)

export default router