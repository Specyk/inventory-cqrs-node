import { db } from "../../../config/db";
import { Product } from "../interfaces/Product";

export async function getProducts(): Promise<Product[]> {
	return db.data.products
}
