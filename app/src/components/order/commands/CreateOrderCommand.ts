
import { CreateOrderBody } from "../schemas/order";

export type OrderItem = {
	productId: string;
	count: number;
};

export class CreateOrderCommand {
	public readonly customerId: string
	public readonly products: OrderItem[]

	constructor(data: CreateOrderBody) {
		// * better option to transform this in separated transformers file, done this way due to limited time
		this.products = data.products.map(p => ({
			productId: p.product_id,
			count: p.count
		}))
		this.customerId = data.customer_id
	}
}
