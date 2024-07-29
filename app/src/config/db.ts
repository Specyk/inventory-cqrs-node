import { Low } from 'lowdb/lib/core/Low'
import { JSONFilePreset } from 'lowdb/node'
import path from 'path'
import { generateUuid } from '../utils/uuid'


const initialData = {
	products: [
		{
			id: generateUuid(),
			name: 'first product',
			description: 'first product description',
			price: 10,
			stock: 5
		}
	]
}


export let db: Low<typeof initialData>

export async function setupDb() {
	const dbFilePath = path.join(process.cwd(), 'app/data/db.json')
	 db = await JSONFilePreset(dbFilePath,  initialData)
}
