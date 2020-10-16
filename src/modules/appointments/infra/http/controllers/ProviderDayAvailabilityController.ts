import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year, day } = request.body;

    const availability = container.resolve(ListProviderDayAvailabilityService);

    const providers = await availability.execute({
      provider_id,
      month,
      year,
      day,
    });

    return response.json(providers);
  }
}
