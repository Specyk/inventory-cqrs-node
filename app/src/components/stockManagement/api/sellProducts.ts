import express, { Request, Response } from 'express';
import { validateBodyWithSchema } from '../../../middlewares/validateBodyWithSchema';
import { ChangeProductStockLevelBody, sellOrRestockProductSchema } from '../schemas/sellOrRestockProductSchema';
import { SellProductsCommand } from '../commands/SellProductsCommand';
import { sellProductsCommandHandler } from '../handlers/commands/sellProductsCommandHandler';


const router = express.Router();

type SellProductsParameters = {
	id: string;
};

router.post('/products/:id/sell', validateBodyWithSchema(sellOrRestockProductSchema), async (req: Request<SellProductsParameters, ChangeProductStockLevelBody>, res: Response, next) => {
	const command = new SellProductsCommand(req.params.id, req.body.count)

	try {
		await sellProductsCommandHandler(command)
		res.status(204).send()
	} catch(err) {
		next(err)
	}
})

export default router
