// api/index.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3001;

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Route d'authentification
app.post('/api/v1/auth', (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Vérification de base (à remplacer par une vérification réelle)
  if (email === 'user@example.com' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});