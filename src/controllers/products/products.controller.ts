import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

interface IProductQueries {
  limit: string;
  offset: string;
}

interface IProductCreate {
  message: string;
}

interface IProductBody extends IProductCreate {
  price: number;
  name: string;
}

interface IProductPost extends IProductCreate {
  payload: IProductBody;
}

@Controller('products')
export class ProductsController {
  @Get('')
  getProductByQuery(@Query() params: IProductQueries): IProductCreate {
    const { limit = '100', offset = '50' } = params;
    return {
      message: `product limit: ${limit}, offset: ${offset}`,
    };
  }

  @Get('/:id')
  getProduct(@Param('id') id: string): IProductCreate {
    return {
      message: `product id: ${id}`,
    };
  }

  @Post()
  createProduct(@Body() payload: IProductBody): IProductPost {
    return {
      message: 'product created',
      payload,
    };
  }
}
