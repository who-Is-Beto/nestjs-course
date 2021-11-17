import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stocks: number;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
//readonly viene de ts y dice que no se puede modificar el valor, asi como llega se va a la base de datos.
