import { Router } from 'express';

import productsRoutes from './products.routes';

const productRouter = Router();

productRouter.use(productsRoutes);

export default productRouter;
