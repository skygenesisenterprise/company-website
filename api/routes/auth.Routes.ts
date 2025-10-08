import express from 'express';
import axios, { AxiosError } from 'axios';

const router = express.Router();

router.post('/auth', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Appel à l'API externe pour l'authentification
    const response = await axios.post('https://api.skygenesisenterprise.com/api/v1/auth', {
      username,
      password
    });

    // Renvoie la réponse de l'API externe
    res.status(response.status).json(response.data);
  } catch (error) {
    // Gestion des erreurs
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      // Erreur de l'API externe
      res.status(axiosError.response.status).json(axiosError.response.data);
    } else {
      // Erreur interne
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

export default router;