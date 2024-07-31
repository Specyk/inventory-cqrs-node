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
		{ name: 'Laptop', description: 'desc', price: 999.99, stock: 5 },
		{ name: 'Smartphone', description: 'desc',price: 699.99, stock: 5 },
		{ name: 'Tablet', description: 'desc', price: 499.99, stock: 5 },
	]);

	await OrderModel.create([
		{
			customerId: customers[0]._id,
			products: [
				{ productId: products[0]._id, count: 1 },
				{ productId: products[1]._id, count: 2 },
			],
		},
		{
			customerId: customers[1]._id,
			products: [
				{ productId: products[2]._id, count: 1 },
			],
		},
	]);
}