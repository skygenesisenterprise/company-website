import { Request, Response } from 'express';
import authService from '../services/authService';

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.status(200).json({ token });
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const authController = { login };
export default authController;