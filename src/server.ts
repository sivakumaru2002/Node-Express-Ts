/* eslint-disable prettier/prettier */
import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { ProductRoute } from './routes/ProductApiRoute';
import { CustomerRoute } from './routes/CustomerApiRoute';

ValidateEnv();

const app = new App([new ProductRoute(), new CustomerRoute()]);

app.listen();
