import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport, DemoDocument } from './airport.schema';
import { Model } from 'mongoose';

@Injectable()
export class AirportService {
  constructor(
    @InjectModel(Airport.name) private AirportModel: Model<Airport>,
  ) {}

  async create(): Promise<Airport> {
    const createdAirport = new this.AirportModel();
    return createdAirport.save();
  }
}
