import { MongoMemoryServer } from "mongodb-memory-server"
import mongoose from "mongoose"
import { seedDatabase } from "./data/seedDatabase"

let mongo: MongoMemoryServer

beforeAll(async () => {
	mongo = await MongoMemoryServer.create()
	const mongoUri = mongo.getUri()
	await mongoose.connect(mongoUri, {})
	await seedDatabase()
})

afterAll(async () => {
	await mongoose.connection.close()
	await mongo.stop()
})
