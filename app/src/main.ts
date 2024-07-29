import express from 'express'
import dotenv from 'dotenv'
import { setupDb } from './config/db'
import router from './components/router'
import {handleError} from './middlewares/handleError'


dotenv.config()

void async function main() {
	await setupDb()

	const app = express()
	const port = process.env.HTTP_SERVER_PORT

	app
		.use(express.json())
		.use(router)
		.use(handleError)

	app.listen(port, () => console.log(`App is listening on port ${port}`))
}()
