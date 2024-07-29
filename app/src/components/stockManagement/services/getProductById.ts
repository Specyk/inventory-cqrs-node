import { db } from "../../../config/db";
import NotFoundException from "../../../exception/NotFoundException";

export async function getProductById(productId: string) {
	await db.read()
	const product = db.data.products.find(p => p.id === productId);
	if (!product) {
		throw new NotFoundException('Product not found');
	}
	return product;
}
