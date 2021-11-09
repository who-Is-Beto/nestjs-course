import { Injectable } from '@nestjs/common';
import { IProduct } from './types/interfaces';

@Injectable()
export class ProductsService {
  private counterId: number = 1;
  private products: Array<IProduct> = [
    {
      description: 'Product incredible',
      id: 1,
      image: 'https://picsum.photos/id/1/200/300',
      name: 'Product 1',
      price: 100,
      stocks: 10,
    },
  ];

  public findAll(): Array<IProduct> {
    return this.products;
  }

  public findOne(id: number): IProduct {
    return this.products.find((product) => product.id === id);
  }

  public create(product: IProduct): IProduct {
    this.counterId++;
    const newProduct: IProduct = {
      ...product,
      id: this.counterId,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
