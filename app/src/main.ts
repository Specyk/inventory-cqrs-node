import express from 'express'
import { setupDb } from './config/db'
import router from './components/router'



void async function main() {
	await setupDb()

	const app = express()

	const port = process.env.HTTP_SERVER_PORT
	app.use(router)

	app.listen(port, () => console.log(`App is listening on port ${port}!`))
}()
