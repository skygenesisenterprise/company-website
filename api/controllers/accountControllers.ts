import { Request, Response } from 'express';
import accountService from '../services/accountServices';

const authenticate = async (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        error: 'Identifier and password are required'
      });
    }

    const result = await accountService.authenticate({ identifier, password });
    
    res.status(200).json({
      success: true,
      data: result,
      message: 'Authentication successful'
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
    res.status(401).json({
      error: errorMessage
    });
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, profile } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: 'Password must be at least 6 characters long'
      });
    }

    const result = await accountService.register({ 
      email, 
      password, 
      fullName, 
      profile 
    });
    
    res.status(201).json({
      success: true,
      data: result,
      message: 'Registration successful'
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Registration failed';
    res.status(400).json({
      error: errorMessage
    });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        error: 'Refresh token is required'
      });
    }

    const tokens = await accountService.refreshToken(refreshToken);
    
    res.status(200).json({
      success: true,
      data: { tokens },
      message: 'Token refreshed successfully'
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Token refresh failed';
    res.status(401).json({
      error: errorMessage
    });
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as Request & { user?: { id: string } }).user?.id;

    if (!userId) {
      return res.status(401).json({
        error: 'User not authenticated'
      });
    }

    const user = await accountService.getUserById(userId);
    
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { account: user },
      message: 'Profile retrieved successfully'
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to retrieve profile';
    res.status(500).json({
      error: errorMessage
    });
  }
};

const accountController = {
  authenticate,
  register,
  refreshToken,
  getProfile
};

export default accountController;