import { JSONFilePreset } from 'lowdb/node'


export async function setupDb() {
	const db = await JSONFilePreset('../../data/db.json', { products: [] })
}
