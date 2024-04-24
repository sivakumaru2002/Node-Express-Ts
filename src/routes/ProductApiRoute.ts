/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { ProductController } from '@/controllers/ProductController';
import { CreateProductDto } from '@/dtos/CreateProductDto';
export class ProductRoute {
  public path = '/products';
  public router = Router();
  public product = new ProductController();
  public prod = new CreateProductDto();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/GetAllProducts`, this.product.getProducts);
    this.router.post(`${this.path}/CreateProduct`, this.product.createProduct);
    this.router.get(`${this.path}/GetProductById/:Id`, this.product.getProductById);
    this.router.put(`${this.path}/UpdateProduct/:Id`, this.product.updateProduct);
    this.router.delete(`${this.path}/DeleteProduct/:Id`, this.product.deleteProduct);
  }
}
