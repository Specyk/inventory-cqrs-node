import { db } from "../../../config/db";
import { generateUuid } from "../../../utils/uuid";
import { CreateProductData } from "../interfaces/CreateProductData";

export async function createProduct(product: CreateProductData) {
	await db.read()
	db.data.products.push({
		...product,
		id: generateUuid()
	})
	await db.write()
}
