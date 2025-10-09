import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database';
import authRoutes from './routes/auth.Routes';

const app = express();
const port = 3001;

connectDB();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});