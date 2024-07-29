import { db } from "../../../config/db";
import ConflictException from "../../../exception/ConflictException";
import { decreaseProductStockLevel } from "../../stockManagement/services/decreaseProductStockLevel";
import { OrderItem } from "../commands/CreateOrderCommand";
import { addOrder } from "../repositories/addOrder";

export async function createOrder(customerId: string, products: OrderItem[]) {
	const productIds = products.map(productInOrder => productInOrder.productId)
	const productsInDb = db.data.products.filter(product => productIds.includes(product.id))

	const productIdsOutOfStock: string[] = []
	for(let i=0; i<productsInDb.length; i++) {
		if(productsInDb[i].stock < products[i].count) {
			productIdsOutOfStock.push(productsInDb[i].id)
		}
	}

	// * may add more details which product / count of available products
	if(productIdsOutOfStock.length > 0) {
		throw new ConflictException(`${productIdsOutOfStock.length} products are not available in stock`)
	}

	// * better solution to use 1 query to db for better performance
	await Promise.all(productsInDb.map((product, i) => decreaseProductStockLevel(product.id, products[i].count)))

	await addOrder(products);
}
