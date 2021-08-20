import Queue from 'bull';

import configBull from '@config/bull';

import Jobs from '../jobs';

const productQueue = new Queue('Inserção única', {
  redis: {
    host: configBull.redis.host,
    port: configBull.redis.port,
    password: configBull.redis.password,
  },
});

productQueue.process(10, Jobs.product);

export default productQueue;
