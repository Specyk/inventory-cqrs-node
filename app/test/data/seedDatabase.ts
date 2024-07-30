import mongoose from 'mongoose';
import { CustomerModel } from '../../src/components/customer/models/Customer';
import { OrderModel } from '../../src/components/order/models/Order';
import ProductModel from '../../src/components/product/models/Product';

export async function seedDatabase() {
    await CustomerModel.deleteMany({});
	await ProductModel.deleteMany({});
	await OrderModel.deleteMany({});

	const customers = await CustomerModel.create([
		{ name: 'John Doe' },
		{ name: 'Jane Smith' },
		{ name: 'Alice Johnson' },
	]);

	const products = await ProductModel.create([
		{ name: 'Laptop', price: 999.99, stock: 5 },
		{ name: 'Smartphone', price: 699.99, stock: 5 },
		{ name: 'Tablet', price: 499.99, stock: 5 },
	]);

	await OrderModel.create([
		{
			customer: customers[0]._id,
			products: [
				{ product: products[0]._id, quantity: 1 },
				{ product: products[1]._id, quantity: 2 },
			],
		},
		{
			customer: customers[1]._id,
			products: [
				{ product: products[2]._id, quantity: 1 },
			],
		},
	]);
}