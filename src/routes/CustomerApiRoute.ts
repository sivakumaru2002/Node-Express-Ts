/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { CustomerController } from '@/controllers/CustomerController';
export class CustomerRoute  {
  public path = '/customers';
  public router = Router();
  public customer = new CustomerController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/GetAllCustomer`,this.customer.getAllCustomers);
   // this.router.post(`${this.path}/CreateCustomer`,this.customer.createCustomer);
  }
}
