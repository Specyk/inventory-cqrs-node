// import { db } from "../../../config/db";
import { Product } from "../interfaces/Product";
import ProductModel from "../models/Product";

export async function getProducts(): Promise<Product[]> {
	return await ProductModel.find()
}
