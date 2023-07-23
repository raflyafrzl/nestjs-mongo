import { Exclude } from 'class-transformer';
export class ResponseAirportEntity {
  name: string;
  message: string;
  @Exclude()
  hello: string;

  constructor(partial: Partial<ResponseAirportEntity>) {
    Object.assign(this, partial);
  }
}
