import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from './Category';

export interface IProduct extends Document {
  name: string;
  price: number;
  category: ICategory['_id'];
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
