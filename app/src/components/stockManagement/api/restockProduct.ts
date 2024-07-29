import express, { Request, Response } from 'express';
import { validateBodyWithSchema } from '../../../middlewares/validateBodyWithSchema';
import { ChangeProductStockLevelBody, sellOrRestockProductSchema } from '../schemas/sellOrRestockProductSchema';
import { RestockProductCommand } from '../commands/RestockProductCommand';
import { restockProductCommandHandler } from '../handlers/commands/restockProductCommandHandler';


const router = express.Router();

router.post('/products/:id/restock', validateBodyWithSchema(sellOrRestockProductSchema), async (req: Request<{id: string}, ChangeProductStockLevelBody>, res: Response, next) => {
	const command = new RestockProductCommand(req.params.id, req.body.count)

	try {
		await restockProductCommandHandler(command)
		res.status(204).send()
	} catch(err) {
		next(err)
	}
})

export default router
