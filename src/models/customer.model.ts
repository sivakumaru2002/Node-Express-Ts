/* eslint-disable prettier/prettier */
import { model, Schema, Document } from 'mongoose';
import { Customer } from '@/interfaces/customer.interface'; 
const CustomerSchema: Schema = new Schema({
  CustomerId:{
    type:String,
    require:'true',
    unique:'true',
  },
  CustomerName:{
    type:String,
    require:'true',
  },
  Email:{
    type:String,
    require:'true',
  },
  Phone:{
    type:Number,
    require:'true'
  }
});

export const CustomerModel = model<Customer & Document>('customer', CustomerSchema);