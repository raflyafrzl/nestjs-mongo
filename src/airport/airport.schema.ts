import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DemoDocument = Airport & Document;

@Schema()
export class Airport {
  @Prop({ required: true, maxlength: 3 })
  airport_code: string;

  @Prop()
  airport_name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, maxlength: 3 })
  location_acronym: string;
}

export const AirportSchema = SchemaFactory.createForClass(Airport);
