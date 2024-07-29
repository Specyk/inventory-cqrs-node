import { db } from "../../../config/db";
import ConflictException from "../../../exception/ConflictException";
import { OrderItem } from "../commands/CreateOrderCommand";
import { addOrder } from "../repositories/addOrder";

export async function createOrder(customerId: string, products: OrderItem[]) {
	const productsInDb = db.data.products.filter(product => products.map(productInOrder => productInOrder.idś))

	const productsOutOfStock: string[] = []
	for(let i=0; i<productsInDb.length; i++) {
		if(productsInDb[i].count < products[i].count) {
			productsOutOfStock.push(productsInDb[i].id)
		}
	}

	// * may add more details which product / count of available products
	if(productsOutOfStock.length > 0) {
		throw new ConflictException(`${productsOutOfStock.length} products are not available in stock`)
	}

	await addOrder(products);
}
