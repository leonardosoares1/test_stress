import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { Router } from 'express';

import productRouter from '@modules/product/infra/http/routes';

import queues from '@shared/queues';

const serverAdapter = new ExpressAdapter();

createBullBoard({
  queues: Object.values(queues).map(queue => new BullAdapter(queue)),
  serverAdapter,
});

const routes = Router();

routes.use('/products', productRouter);

serverAdapter.setBasePath('/queues');
routes.use('/queues', serverAdapter.getRouter());

export default routes;
