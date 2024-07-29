import { Low } from 'lowdb/lib/core/Low'
import { JSONFilePreset } from 'lowdb/node'


const initialData = {
	products: [
		{
			name: 'first product',
			description: 'first product description',
			price: 10,
			stock: 5
		}
	]
}


export let db: Low<typeof initialData>

export async function setupDb() {
	 db = await JSONFilePreset('../../data/db.json', initialData)
}
