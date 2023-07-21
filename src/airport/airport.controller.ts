import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AirportService } from './airport.service';
import CreateAirportDTO, { CreateAirportSchema } from 'src/dto/CreateAirport';
import { JoiValidationPipe } from 'src/pipes/validation.pipe';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  getAll() {
    return {
      success: 'test',
    };
  }

  @Post()
  @UsePipes(new JoiValidationPipe(CreateAirportSchema))
  createAirport(@Body() airportDTO: CreateAirportDTO) {
    return airportDTO;
  }
}
