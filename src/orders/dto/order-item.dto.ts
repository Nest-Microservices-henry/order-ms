import { IsNumber, IsPositive, IsPostalCode } from 'class-validator';

export class OrderItemDto {
  @IsNumber()
  @IsPositive()
  productId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  price: number;
}
