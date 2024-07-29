import { createProduct } from "../../services/createProduct";
import { CreateProductCommand } from "../../commands/CreateProductCommand";


export async function createProductHandler(command: CreateProductCommand) {
	const data = createProduct({
		name: command.name,
		description: command.description,
		price: command.price,
		stock: command.stock
	});
	return data;
}
