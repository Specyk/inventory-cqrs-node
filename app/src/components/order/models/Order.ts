import mongoose, { Schema, Model } from 'mongoose';

export interface IProductItem {
	productId: string;
	count: number;
}

export interface IOrder {
	customerId: string;
	products: IProductItem[];
}

const productItemSchema = new Schema<IProductItem>({
	productId: { type: String, required: true },
	count: { type: Number, required: true, min: 1 }
});

const orderSchema = new Schema<IOrder>({
	customerId: { type: String, required: true },
	products: { type: [productItemSchema], required: true }
});

export const OrderModel: Model<IOrder> = mongoose.model<IOrder>('Order', orderSchema);
