import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});