import express, { Request, Response } from 'express';
import { validateBodyWithSchema } from '../../../../middlewares/validateBodyWithSchema';
import { ChangeProductStockLevelBody, changeProductStockLevelSchema } from '../../schemas/changeProductStockLevel';
import { increaseProductStockLevel } from '../../services/increaseProductStockLevel.1';


const router = express.Router();

router.post('/products/:id/sell', validateBodyWithSchema(changeProductStockLevelSchema), async (req: Request<{id: string}, ChangeProductStockLevelBody>, res: Response) => {
	await increaseProductStockLevel(req.params.id, req.body.count)
	res.status(204)
})

export default router
