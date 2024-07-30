import ProductModel from "../../../../../src/components/product/models/Product"
import { increaseProductStockLevel } from "../../../../../src/components/stockManagement/services/increaseProductStockLevel.1"

describe('increaseProductStockLevel.spec.spec', () => {
	test('should increase stock value for product', async () => {
		const products = await ProductModel.find()

		increaseProductStockLevel(products[0].id, 4)

		const foundProduct = await ProductModel.findById(products[0].id)
		expect(foundProduct!.stock).toBe(9)
	})
 })