import { increaseProductStockLevel } from "../../services/increaseProductStockLevel.1";
import { SellProductsCommand } from "../../commands/SellProductsCommand";


export async function sellProductsCommandHandler(command: SellProductsCommand) {
	await increaseProductStockLevel(command.productId, command.count);
}
