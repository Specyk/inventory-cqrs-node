import { db } from "../../../config/db";
import { getProductById } from "./getProductById";

export async function increaseProductStockLevel(productId: string, count: number) {
	const product = await getProductById(productId)
	product.stock += count
	await db.write()
}
