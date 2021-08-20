interface IBullOptions {
  redis: {
    host?: string;
    password?: string;
    port?: number;
  };
}

const configBull: IBullOptions = {
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASS,
  },
};

export default configBull;
