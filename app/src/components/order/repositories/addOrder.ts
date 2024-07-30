import { generateUuid } from "../../../utils/uuid";
import { OrderItem } from "../commands/CreateOrderCommand";

export async function addOrder(products: OrderItem[]) {
	// await db.read();
	// db.data.orders.push({
	// 	id: generateUuid(),
	// 	items: products
	// });
	// await db.write();
}
