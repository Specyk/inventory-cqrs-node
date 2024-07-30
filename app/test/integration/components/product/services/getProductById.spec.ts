import ProductModel from "../../../../../src/components/product/models/Product"
import { getProductById } from "../../../../../src/components/product/services/getProductById"

describe('getProductById.spec', () => {
	test('should return product with specified id', async () => {
		const products = await ProductModel.find()
		const returnedProduct = await getProductById(products[0].id)
		expect(returnedProduct.id).toBe(products[0].id)
	 })
 })