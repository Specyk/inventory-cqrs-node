export const initialData = {
	products: [
		{
			id: 'first-item-id',
			name: 'first product',
			description: 'first product description',
			price: 10,
			stock: 5
		}
	],
	orders: [
		{
			id: 'first-order-id',
			items: [{
				productId: 'first-item-id',
				count: 2
			}]
		}
	],
	customers: [
		{
			id: 'first-customer-id',
			name: 'first-customer-name'
		}
	]
};
