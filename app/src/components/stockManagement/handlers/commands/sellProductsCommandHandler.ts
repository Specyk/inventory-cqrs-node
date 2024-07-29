import { increaseProductStockLevel } from "../../services/increaseProductStockLevel.1";
import { SellProductsCommand } from "../../commands/SellProductsCommand";
import { decreaseProductStockLevel } from "../../services/decreaseProductStockLevel";


export async function sellProductsCommandHandler(command: SellProductsCommand) {
	await decreaseProductStockLevel(command.productId, command.count);
}
