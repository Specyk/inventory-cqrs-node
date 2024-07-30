import { OrderModel } from "../../../../src/components/order/models/Order"
import {createOrder} from "../../../../src/components/order/services/createOrder"
import ProductModel from "../../../../src/components/product/models/Product"


describe('order', () => {
	describe('createOrder', () => {
		test('should create an order and decrease product stock value', async () => {
			const ordersBefore = await OrderModel.countDocuments()

			const product = await ProductModel.create({
				name: 'mock-product-name',
				price: 10,
				description: 'some description',
				stock: 5
			})

			await createOrder('mock-customer-id', [
				{
					productId: product.id,
					count: 3
				}
			])

			const productAfter = await ProductModel.findById(product.id)
			const ordersAfter = await OrderModel.countDocuments()

			expect(productAfter!.stock).toBe(2)
			expect(ordersAfter).toBe(ordersBefore + 1)
		 })
	 })
 })