import express from 'express';
import { validateBodyWithSchema } from '../../../../middlewares/validateBodyWithSchema';
import { ChangeProductStockLevelBody, changeProductStockLevelSchema } from '../../schemas/changeProductStockLevel';
import { increaseProductStockLevel } from '../../services/increaseProductStockLevel.1';
import { CreateProductBody } from '../../../products/interfaces/Product';


const router = express.Router();

router.post('/products/:id/restock', validateBodyWithSchema(changeProductStockLevelSchema), async (req,, res) => {
	const data = await increaseProductStockLevel(req.params.id, req.body.count)
	res.status(204)
})

export default router
