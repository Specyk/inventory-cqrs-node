import mongoose, { Schema, Document } from 'mongoose';


export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
}

const productSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  description: {
    type: String,
    required: true,
    maxlength: [50, 'Description cannot exceed 50 characters']
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be non-negative value']
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock must be a non-negative integer'],
    validate: {
      validator: Number.isInteger,
      message: 'Stock must be an integer'
    }
  }
});

const ProductModel = mongoose.model<IProduct>('Product', productSchema);

export default ProductModel;