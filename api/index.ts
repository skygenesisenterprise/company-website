// api/index.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const port = process.env.PORT || 3001;

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Configuration de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mon API',
      version: '1.0.0',
      description: 'Documentation de l\'API de mon projet',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./api/*.ts'], // Chemin vers vos fichiers de routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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