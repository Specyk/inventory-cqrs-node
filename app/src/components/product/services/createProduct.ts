import { CreateProductData } from "../interfaces/CreateProductData";
import ProductModel from "../models/Product";

export async function createProduct(data: CreateProductData) {
	const product = await ProductModel.create(data)
	return product
}
