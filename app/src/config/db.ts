import mongoose from 'mongoose';
import { logger } from '../utils/logger';


export async function connectDB() {
	if (!process.env.MONGO_URL) {
		logger.error('No MONGO_URL in env')
		process.exit()
	}

	try {
		await mongoose.connect(process.env.MONGO_URL, {});
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('MongoDB connection failed:', (error as Error).message);
		process.exit(1);
	}
}
