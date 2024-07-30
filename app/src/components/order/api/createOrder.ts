import express, { Request, Response } from 'express';
import { validateBodyWithSchema } from '../../../middlewares/validateBodyWithSchema';
import { CreateOrderCommand } from '../commands/CreateOrderCommand';
import { createOrderHandler } from '../handlers/commands/createOrderHandler';
import { CreateOrderBody, orderSchema } from '../schemas/order';


const router = express.Router();

router.post('/orders', validateBodyWithSchema(orderSchema), async (req: Request<{}, CreateOrderBody>, res: Response, next) => {
	const command = new CreateOrderCommand(req.body)

	try {
		await createOrderHandler(command)
		res.status(204).send()
	} catch(err) {
		next(err)
	}
})

export default router
