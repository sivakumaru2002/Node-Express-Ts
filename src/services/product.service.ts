import { Service } from 'typedi';
import { Product } from '@/interfaces/product.interface';
import { ProductModel } from '@/models/product.model';
import { exit } from 'process';
import { randomUUID } from 'crypto';
@Service()
export class ProductService {
  public async findAllProduct(): Promise<Product[]> {
    const product: Product[] = await ProductModel.find();
    return product;
  }

  public async CreateProduct(productdata: Product): Promise<Product> {
    const findProduct: Product = await ProductModel.findOne({ Productname: productdata.ProductName });
    if (findProduct) exit;
    productdata.ProductId = randomUUID();
    const createUserData: Product = await ProductModel.create({ ...productdata });
    return createUserData;
  }

  public async GetProductById(uuid: string): Promise<Product> {
    const findProduct: Product = await ProductModel.findOne({ ProductId: uuid });
    return findProduct;
  }

  public async updateProduct(userId: string, product: Product): Promise<Product> {
    const userData: Product = await ProductModel.findOne({ ProductId: userId });
    userData.ProductName = product.ProductName;
    userData.Quantity = product.Quantity;
    userData.Price = product.Price;
    await ProductModel.findByIdAndUpdate(userData._id, { ...userData });
    return userData;
  }

  public async deleteProduct(userId: string): Promise<Product> {
    const deleteProductById: Product = await ProductModel.findOne({ ProductId: userId });
    const deleteproduct: Product = deleteProductById;
    await ProductModel.deleteOne({ deleteProductById });
    return deleteproduct;
  }
}
