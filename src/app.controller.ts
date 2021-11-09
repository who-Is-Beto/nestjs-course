import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface IProductQueries {
  limit: string;
  offset: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return 'test';
  }

  @Get('/products/:id')
  getProduct(@Param('id') id: string): string {
    return `product ${id}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `category: ${id}, width product ${productId}`;
  }

  @Get('/products')
  getProductByQuery(@Query() params: IProductQueries): string {
    const { limit = '100', offset = '50' } = params;
    return `limit => ${limit}, offset => ${offset}`;
  }
}
