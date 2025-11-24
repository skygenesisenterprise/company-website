import express from 'express';
import accountController from '../controllers/accountControllers';

const router = express.Router();

// Authentication routes
router.post('/authenticate', accountController.authenticate);
router.post('/register', accountController.register);
router.post('/refresh-token', accountController.refreshToken);

// Protected routes (require authentication)
router.get('/profile', accountController.getProfile);

export default router;