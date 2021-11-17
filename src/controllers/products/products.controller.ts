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
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../services/products/types/interfaces';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getProductByQuery(@Query() params: IProductQueries): Array<IProduct> {
    return this.productsService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.CREATED)
  getProduct(@Param('id') id: number): IProduct | void {
    return this.productsService.findOne(id);
  }

  @Post()
  createProduct(@Body() payload: IProduct): IProductPost {
    return {
      message: 'product created',
      payload: this.productsService.create({
        ...payload,
      }),
    };
  }

  @Put('/:id')
  updateProduct(
    @Param('id') id: number,
    @Body() payload: IProduct,
  ): IProduct | string {
    return this.productsService.update(id, payload);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): IProductCreate {
    return {
      message: this.productsService.delete(id),
    };
  }
}
