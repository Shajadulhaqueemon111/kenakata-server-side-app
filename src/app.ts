import express, { Request, Response } from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/not-found';
import router from './app/router';

app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://my-kenakata-app.vercel.app'],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use('/api/v1', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
