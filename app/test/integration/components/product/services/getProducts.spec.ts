import { getProducts } from "../../../../../src/components/product/services/getProducts"

describe('getProducts', () => {
	test('should return list of all products', async () => {
		const products = await getProducts()
		expect(products).toHaveLength(3)
		expect(products[1]).toBe(expect.objectContaining({
			name: expect.any(String),
			description: expect.any(String),
			price: expect.any(Number),
			stock: expect.any(Number)
		}))
	 })
 })