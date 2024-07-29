import express from 'express'
import { getProducts } from '../../services/getProducts';



const router = express.Router();

router.get('/products', async (req, res) => {
	const data = await getProducts()
	res.json(data)
})

export default router
