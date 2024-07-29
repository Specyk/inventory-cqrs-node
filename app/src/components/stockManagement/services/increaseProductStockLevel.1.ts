import { db } from "../../../config/db";

export async function increaseProductStockLevel(productId: string, count: number) {
	const product = db.data.products.find(p => p.id === productId)

	if(!product) {
		// todo  404
		throw new Error('Product not found')
	}

	product.stock += count
	await db.write()
}
