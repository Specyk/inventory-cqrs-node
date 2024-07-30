import NotFoundException from "../../../exception/NotFoundException";
import ProductModel from "../models/Product";

export async function getProductById(productId: string) {
	const product = await ProductModel.findById(productId).orFail(new NotFoundException('No product with specified id'))
	return product
}
