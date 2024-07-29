import { getProducts } from "../../services/getProducts";
import { GetProductsQuery } from "../../queries/GetProductsQuery";


export async function getProductsHandler(query: GetProductsQuery) {
	const data = await getProducts();
	return data;
}
