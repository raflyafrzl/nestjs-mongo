import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Airport } from './airport.schema';
import { Model } from 'mongoose';

import CreateOrUpdateAirportDTO from 'src/dto/CreateAirport';

@Injectable()
export class AirportService {
  constructor(
    @InjectModel(Airport.name) private AirportModel: Model<Airport>,
  ) {}

  async create(airportDTO: CreateOrUpdateAirportDTO): Promise<Airport> {
    const createdAirport = new this.AirportModel(airportDTO);
    return createdAirport.save();
  }

  async findOne(id: string): Promise<Airport> {
    const result = this.AirportModel.findOne({ _id: id });
    return result;
  }
  async findMany(): Promise<Airport[]> {
    const result = await this.AirportModel.find();
    return result;
  }
  async update(
    id: string,
    payload: CreateOrUpdateAirportDTO,
  ): Promise<Airport> {
    const result = this.AirportModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return result;
  }
}
