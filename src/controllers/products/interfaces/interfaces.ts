import { IProduct } from 'src/services/products/types/interfaces';

export interface IProductQueries {
  limit: string;
  offset: string;
}

export interface IProductCreate {
  message: string;
}

export interface IProductBody extends IProductCreate {
  price: number;
  name: string;
}

export interface IProductPost extends IProductCreate {
  payload: IProduct;
}
