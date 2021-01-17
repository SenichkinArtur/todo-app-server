import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './database';
import User from './database/models/User';

const app: Express = express();
const port: number = 3100;

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response): void => {
  res.send('get request to the home page');
});

app.listen(port, async (): Promise<void> => {
  connectDb();

  return console.log(`server is running on port ${port}`);
});

const connectDb = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await User.sync();
    console.log('db connected');
  } catch (error) {
    console.log('db connection error: ', error);
  }
};