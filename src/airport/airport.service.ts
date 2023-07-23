import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport, DemoDocument } from './airport.schema';
import { Model } from 'mongoose';
import CreateAirportDTO from 'src/dto/CreateAirport';

@Injectable()
export class AirportService {
  constructor(
    @InjectModel(Airport.name) private AirportModel: Model<Airport>,
  ) {}

  async create(airportDTO: CreateAirportDTO): Promise<Airport> {
    const createdAirport = new this.AirportModel(airportDTO);
    return createdAirport.save();
  }
}
