import { Request, Response } from 'express';

import Queues from '@shared/queues';

enum EDrugType {
  REFERENCIA,
  SIMILAR,
  GENERICO,
}

interface ICreateRequestBody {
  list: {
    barcode?: string;
    canRedeem: boolean;
    description: string;
    drugActiveIngredient?: string;
    drugControlled: boolean;
    drugIsFp: boolean;
    drugRegistrationNumberMs?: string;
    drugType: EDrugType;
    hasStock: boolean;
    manufacturerId: number;
    name: string;
    pedcoinsToRedeem: number;
    sku?: string;
  }[];
}

class ProductController {
  public async create(
    request: Request<unknown, unknown, ICreateRequestBody>,
    response: Response,
  ): Promise<Response> {
    const numberItems = 5;
    const dataForJobs = [];

    while (request.body.list.length) {
      dataForJobs.push(request.body.list.splice(0, numberItems));
    }

    dataForJobs.forEach(data => {
      Queues.product.add(data);
    });

    return response.status(201).json();
  }
}

export default ProductController;
