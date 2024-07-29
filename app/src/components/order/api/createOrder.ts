import express, { Request, Response } from 'express';
import { validateBodyWithSchema } from '../../../middlewares/validateBodyWithSchema';
import { changeProductStockLevelSchema } from '../../schemas/changeProductStockLevel';
import { CreateOrderBody, orderSchema } from '../schemas/order';
import { CreateOrderCommand } from '../commands/CreateOrderCommand';
import { createOrderHandler } from '../handlers/commands/createOrderHandler';


const router = express.Router();

router.post('/orders', validateBodyWithSchema(orderSchema), async (req: Request<{}, CreateOrderBody>, res: Response) => {
	const command = new CreateOrderCommand(req.body)
	await createOrderHandler(command)
	res.status(204)
})

export default router
