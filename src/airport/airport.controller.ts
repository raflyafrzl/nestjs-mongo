import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AirportService } from './airport.service';
import CreateAirportDTO, { CreateAirportSchema } from 'src/dto/CreateAirport';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';
import { ResponseAirportEntity } from './airport.entity';
import { Airport } from './airport.schema';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { CatchException } from 'src/exception/exception-http';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  getAll() {
    throw new CatchException('test', 404);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(CreateAirportSchema))
  @UseFilters(HttpExceptionFilter)
  async createAirport(@Body() airportDTO: CreateAirportDTO) {
    const result: Airport = await this.airportService.create(airportDTO);
    return result;
  }
}
