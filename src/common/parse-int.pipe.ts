import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import e from 'express';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const valueToRetuern = parseInt(value, 10);
    if (isNaN(valueToRetuern)) {
      throw new BadRequestException(`Value ${value} are not eable to parse.`);
    }
    return valueToRetuern;
  }
}
