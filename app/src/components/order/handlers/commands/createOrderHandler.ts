import { CreateOrderCommand } from "../../commands/CreateOrderCommand";
import { createOrder } from "../../services/createOrder";

export async function createOrderHandler(command: CreateOrderCommand) {
	await createOrder(command.customerId, command.products)
}
