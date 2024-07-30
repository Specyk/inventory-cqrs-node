import mongoose, { Document, Schema } from 'mongoose';


interface ICustomer extends Document {
	_id: mongoose.Types.ObjectId;
	name: string;
}

const CustomerSchema: Schema = new Schema<ICustomer>({
	name: { type: String, required: true },
});

export const CustomerModel = mongoose.model<ICustomer>('Customer', CustomerSchema);
