import { increaseProductStockLevel } from "../../services/increaseProductStockLevel.1";
import { RestockProductCommand } from "../../commands/RestockProductCommand";


export async function restockProductCommandHandler(command: RestockProductCommand) {
	await increaseProductStockLevel(command.productId, command.count);
}
