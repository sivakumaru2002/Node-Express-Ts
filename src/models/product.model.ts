/* eslint-disable prettier/prettier */
import { model, Schema, Document } from 'mongoose';
import { Product } from '@/interfaces/product.interface';
const ProductSchema: Schema = new Schema({
  ProductId:{
    type:String,
    require:'true',
    unique:'true',
  },
  ProductName:{
    type:String,
    require:'true',
  },
  Quantity:{
    type:Number,
    require:'true',
  },
  Price:{
    type:Number,
    require:'true'
  }
});

export const ProductModel = model<Product & Document>('product', ProductSchema);