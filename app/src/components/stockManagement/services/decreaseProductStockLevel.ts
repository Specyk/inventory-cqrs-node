import { db } from "../../../config/db";
import ConflictException from "../../../exception/ConflictException";
import { getProductById } from "../../product/services/getProductById";

export async function decreaseProductStockLevel(productId: string, count: number) {
	const product = await getProductById(productId);

	if(product.stock < count) {
		throw new ConflictException('There are not enough products in stock')
	}

	product.stock -= count
	await db.write()
}
