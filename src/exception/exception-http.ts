import { HttpException } from '@nestjs/common';

export class CatchException extends HttpException {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
