import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';
import { CatchException } from 'src/exception/exception-http';

@Injectable()
export class MongoIdCastPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const validId = Types.ObjectId.isValid(value);
    if (!validId) {
      throw new CatchException('Invalid Id Parameter', 400);
    }
  }
}
