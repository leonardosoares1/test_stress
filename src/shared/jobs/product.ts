import { DoneCallback, Job } from 'bull';
import { getRepository } from 'typeorm';

import Product from '@modules/product/infra/typeorm/entities/Product';

// enum EDrugType {
//   REFERENCIA,
//   SIMILAR,
//   GENERICO,
// }

// interface ICreateRequestBody {
//   barcode?: string;
//   canRedeem: boolean;
//   description: string;
//   drugActiveIngredient?: string;
//   drugControlled: boolean;
//   drugIsFp: boolean;
//   drugRegistrationNumberMs?: string;
//   drugType: EDrugType;
//   hasStock: boolean;
//   manufacturerId: number;
//   name: string;
//   pedcoinsToRedeem: number;
//   sku?: string;
// }

const product = async (data: Job, done: DoneCallback): Promise<void> => {
  try {
    const productRepository = getRepository(Product);
    const productCreated = productRepository.create(data.data);
    const productSaved = await productRepository.save(productCreated);
    done(null, productSaved);
  } catch (err) {
    console.log(err.message);
    done(new Error(err), { err });
  }
};

export default product;
