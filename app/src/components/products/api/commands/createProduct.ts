import express from 'express'
import { getProducts } from '../../services/getProducts';
import { createProduct } from '../../services/createProduct';
import { validateBodyWithSchema } from '../../../../middlewares/validateBodyWithSchema';
import { productSchema } from '../../schemas/product';


const router = express.Router();

router.post('/products', validateBodyWithSchema(productSchema), async (req, res) => {
	const data = await createProduct(req.body)
	res.json(data)
})

export default router
