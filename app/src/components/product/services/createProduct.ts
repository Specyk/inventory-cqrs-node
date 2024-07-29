import { db } from "../../../config/db";
import { Product } from "../interfaces/Product";

export async function createProduct(product: Product) {
	db.data.products.push(product)
	await db.write()
}
