import { MongoMemoryServer } from "mongodb-memory-server"
import mongoose from "mongoose"

let mongo: MongoMemoryServer

beforeAll(async () => {
	mongo = await MongoMemoryServer.create()
	const mongoUri = mongo.getUri()
	await mongoose.connect(mongoUri, {})
})

afterAll(async () => {
	await mongoose.connection.close()
	await mongo.stop()
})
