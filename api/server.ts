import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database';
import accountRoutes from './routes/account.Routes';
import cmsRoutes from './routes/cms.Routes';

const app = express();
const port = 8080;

connectDB();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Sky Genesis Enterprise API - Accounts & CMS Service');
});

// New account routes (v1 API)
app.use('/api/v1/accounts', accountRoutes);

// CMS routes (v1 API)
app.use('/api/v1/cms', cmsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});