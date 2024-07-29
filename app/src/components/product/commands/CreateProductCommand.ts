import { CreateProductData } from '../interfaces/CreateProductData';

export class CreateProductCommand implements CreateProductData {
	public readonly name: string;
	public readonly description: string;
	public readonly price: number;
	public readonly stock: number;

	constructor(data: CreateProductData) {
		this.name = data.name,
			this.description = data.description;
		this.price = data.price;
		this.stock = data.stock;
	}
}
