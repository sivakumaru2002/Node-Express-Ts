/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CustomerService } from '@/services/customer.service';
import { Customer } from '@/interfaces/customer.interface';

export class CustomerController {
  public customerservice = Container.get(CustomerService);
  public getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customer: Customer[] = await this.customerservice.GetAllCustomer();
      res.status(200).json({ Data: customer, message: 'Customers' });
    } catch (error) {
      next(error);
    }
  };
  public createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customer: Customer = req.body;
      const customers: Customer = await this.customerservice.CreateCustomer(customer);
      res.status(201).json({ Data: customers, message: 'Created' });
    } catch (error) {
      next(error);
    }
  };
}
