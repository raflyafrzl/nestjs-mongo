import * as Joi from 'joi';

export const CreateAirportSchema = Joi.object({
  airport_code: Joi.string().max(3, 'utf-8').required(),
  airport_name: Joi.string().required(),
  location: Joi.string().required(),
  location_acronym: Joi.string().required().max(3, 'utf-8'),
});

export default interface CreateOrUpdateAirportDTO {
  airport_name: string;
  airport_code: string;
  location: string;
  location_acronym: string;
}
