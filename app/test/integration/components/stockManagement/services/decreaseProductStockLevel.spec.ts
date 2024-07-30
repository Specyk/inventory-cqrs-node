import { text } from "body-parser"
import { decreaseProductStockLevel } from "../../../../../src/components/stockManagement/services/decreaseProductStockLevel"
import ProductModel from "../../../../../src/components/product/models/Product"

describe('decreaseProductStockLevel.spec', () => {
	test('should decrease stock value for product', async () => {
		const products = await ProductModel.find()

		decreaseProductStockLevel(products[0].id, 4)

		const foundProduct = await ProductModel.findById(products[0].id)
		expect(foundProduct!.stock).toBe(1)
	})

	test('should decrease stock value for product', async () => {
		const products = await ProductModel.find()
		expect(decreaseProductStockLevel(products[1].id, 6)).rejects.toThrow(expect.objectContaining({
			statusCode: 409
		}))
	})
 })