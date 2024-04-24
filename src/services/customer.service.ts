/* eslint-disable prettier/prettier */
import { Service } from 'typedi';
import { Customer } from '@/interfaces/customer.interface';
import { CustomerModel } from '@/models/customer.model';
import { exit } from 'process';
import { randomUUID } from 'crypto';

@Service()
export class CustomerService{
    public async  GetAllCustomer():Promise<Customer[]>{
        const customer:Customer[]=await CustomerModel.find();
        return customer;
    }
    public async CreateCustomer(userdata:Customer):Promise<Customer>{
        const customer:Customer=await CustomerModel.findOne({CustomerId:userdata.CustomerId});
        if(customer) exit;
        userdata.CustomerId=randomUUID();
        const customers:Customer=await CustomerModel.create(userdata);
        return customers;
    }
}