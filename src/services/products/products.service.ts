import { Injectable, NotFoundException } from '@nestjs/common';
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
    const product = this.products.filter((product) => +id === product.id)[0];
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
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

  public update(id: number, product: IProduct): IProduct | string {
    const productId = this.findOne(id);

    if (productId) {
      const index = this.products.indexOf(productId);
      this.products[index] = {
        ...productId,
        ...product,
      };
      return this.products[index];
    }

    return 'this product does not exist';
  }

  public delete(id: number): string {
    console.log(id, typeof id);
    const index = this.products.findIndex((product) => product.id === +id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products.splice(index, 1);
    return `Product #${id} deleted`;
  }
}
