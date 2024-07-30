import { getProductById } from "../../product/services/getProductById";

export async function increaseProductStockLevel(productId: string, count: number) {
	const product = await getProductById(productId)
	product.stock += count
	await product.save()
}
