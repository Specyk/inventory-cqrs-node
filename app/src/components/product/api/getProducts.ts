import express from 'express'
import { GetProductsQuery } from '../queries/GetProductsQuery';
import { getProductsHandler } from '../handlers/queries/getProductsHandler';


const router = express.Router();

router.get('/products', async (req, res) => {
	const command = new GetProductsQuery()
	const data = await getProductsHandler(command)
	res.json(data)
})

export default router
