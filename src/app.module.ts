import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AirportModule } from './airport/airport.module';
@Module({
  imports: [MongooseModule.forRoot(process.env.PORT_DB), AirportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
