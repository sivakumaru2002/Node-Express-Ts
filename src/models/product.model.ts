/* eslint-disable prettier/prettier */
import { model, Schema, Document } from 'mongoose';
import { Product } from '@/interfaces/product.interface';
import { bool } from 'envalid';
const ProductSchema: Schema = new Schema({
  // ProductId:{
  //   type:String,
  //   require:'true',
  //   unique:'true',
  // },
  ProductName: {
    type: String,
    require: 'true',
  },
  Quantity: {
    type: Number,
    require: 'true',
  },
  IsActive: {
    type: Boolean,
    require: 'true',
  },
});

export const ProductModel = model<Product & Document>('product', ProductSchema);
