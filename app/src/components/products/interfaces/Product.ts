import { z } from "zod"
import { productSchema } from "../schemas/product"


export interface Product {
	id: string
	name: string
	description: string
	price: number
	stock: number
}
