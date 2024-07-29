import express, { Request, Response } from 'express';
import { validateBodyWithSchema } from '../../../middlewares/validateBodyWithSchema';
import { CreateProductCommand } from '../commands/CreateProductCommand';
import { createProductHandler } from '../handlers/commands/createProductHandler';
import { CreateProductBody, productSchema } from '../schemas/product';


const router = express.Router();

router.post('/products', validateBodyWithSchema(productSchema), async (req: Request<{}, CreateProductBody>, res: Response, next) => {
	const command = new CreateProductCommand(req.body)

	try {
		const data = await createProductHandler(command)
		res.json(data)
	} catch(err) {
		next(err)
	}
})

export default router
