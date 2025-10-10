import UserModel from '../models/userModel';
import { pool } from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userModel = new UserModel(pool);

const login = async (email: string, password: string) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  return token;
};

const register = async (username: string, email: string, password: string) => {
  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({ username, email, password_hash: hashedPassword });
  return user;
};

export default { login, register };