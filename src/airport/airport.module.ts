import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Airport, AirportSchema } from './airport.schema';
import { MongoIdCastPipe } from 'src/pipes/mongo-id-cast.pipe';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Airport.name, schema: AirportSchema }]),
  ],
  providers: [AirportService, MongoIdCastPipe],
  controllers: [AirportController],
})
export class AirportModule {}
