/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty,} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public ProductName: string;

  @IsNotEmpty()
  public Quantity: number;
  
  @IsNotEmpty()
  public Price: number;
}


