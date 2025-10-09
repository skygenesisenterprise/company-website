import express from 'express';
import authService from '../services/authService';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: (error as Error).message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await authService.register(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
});

export default router;