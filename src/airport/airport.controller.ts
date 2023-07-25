import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportSchema } from 'src/dto/CreateAirport';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';
import { Airport } from './airport.schema';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { WebResponse } from 'src/model/web-response';
import { MongoIdCastPipe } from 'src/pipes/mongo-id-cast.pipe';
import CreateOrUpdateAirportDTO from 'src/dto/CreateAirport';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(CreateAirportSchema))
  @UseFilters(HttpExceptionFilter)
  async createAirport(
    @Body() airportDTO: CreateOrUpdateAirportDTO,
  ): Promise<WebResponse> {
    const airport: Airport = await this.airportService.create(airportDTO);
    return {
      status_code: 201,
      message: 'You have been successfully created',
      data: {
        Airport: airport,
      },
    };
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  async getById(
    @Param('id', MongoIdCastPipe) id: string,
  ): Promise<WebResponse> {
    const airport = await this.airportService.findOne(id);

    return {
      status_code: 200,
      message: 'success getting specific data',
      data: {
        Airport: airport,
      },
    };
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  async getAll(): Promise<WebResponse> {
    const airports: Airport[] = await this.airportService.findMany();
    return {
      status_code: 200,
      message: 'success getting all data',
      data: {
        Airport: airports,
      },
    };
  }

  @Patch(':id')
  @UseFilters(HttpExceptionFilter)
  async updateAirport(
    @Body() payload: CreateOrUpdateAirportDTO,
    @Param('id', MongoIdCastPipe) id: string,
  ): Promise<WebResponse> {
    const result = await this.airportService.update(id, payload);
    return {
      status_code: 200,
      message: 'Airport has been successfully updated',
      data: {
        Airport: result,
      },
    };
  }
}
