import express from 'express'
import { GetProductsQuery } from '../queries/GetProductsQuery';
import { getProductsHandler } from '../handlers/queries/getProductsHandler';


const router = express.Router();

router.get('/products', async (req, res, next) => {
	const command = new GetProductsQuery()

	try {
		const data = await getProductsHandler(command)
		res.json(data)
	} catch(err) {
		next(err)
	}
})

export default router
