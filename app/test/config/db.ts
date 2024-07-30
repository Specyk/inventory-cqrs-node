import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';


export let mongoMemoryServerInstance: MongoMemoryServer

export async function connectDb() {
	mongoMemoryServerInstance = await MongoMemoryServer.create();
	const uri = mongoMemoryServerInstance.getUri();

	try {
		await mongoose.connect(uri);
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('MongoDB connection failed:', (error as Error).message);
		process.exit(1);
	}
}