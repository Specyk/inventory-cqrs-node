import { db } from "../../../config/db";
import { generateUuid } from "../../../utils/uuid";

export async function addOrder(products: ProductItem[]) {
	await db.read();
	db.data.orders.push({
		id: generateUuid(),
		items: products
	});
	await db.write();
}
