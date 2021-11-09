import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import {
  IProductQueries,
  IProductCreate,
  IProductPost,
  IProductBody,
} from './interfaces/interfaces';
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
  @HttpCode(HttpStatus.CREATED)
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

  @Put('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() payload: IProductBody,
  ): IProductPost {
    return {
      message: `product id: ${id}`,
      payload,
    };
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): IProductCreate {
    return {
      message: `deleted product id: ${id}`,
    };
  }
}
