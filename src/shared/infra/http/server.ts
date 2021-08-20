import 'reflect-metadata';
import 'dotenv/config';

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  return response.status(500).json({
    message: 'Erro interno do servidor',
    err: err.message,
  });
});

const port = process.env.PORT;
const currentDate = new Date();
const messageHour = `${currentDate.getDate()}/${String(
  currentDate.getMonth() + 1,
).padStart(2, '0')}/${currentDate.getFullYear()} as ${String(
  currentDate.getHours(),
).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(
  2,
  '0',
)}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

process.on('SIGTERM', () => {
  process.exit();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `\n\nIniciado na porta ${port} em ${messageHour}!\n\nhttp://localhost:${process.env.PORT}`,
  );
});
