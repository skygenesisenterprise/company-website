import express from 'express';
import cmsController from '../controllers/cmsControllers';
import { authenticateToken } from '../middlewares/accountMiddlewares';

const router = express.Router();

// Dashboard routes
router.get('/dashboard/stats', authenticateToken, cmsController.getDashboardStats);

// Blog Posts routes
router.get('/blog/posts', cmsController.getBlogPosts);
router.get('/blog/posts/:id', cmsController.getBlogPostById);
router.post('/blog/posts', authenticateToken, cmsController.createBlogPost);
router.put('/blog/posts/:id', authenticateToken, cmsController.updateBlogPost);
router.delete('/blog/posts/:id', authenticateToken, cmsController.deleteBlogPost);

// Job Postings routes
router.get('/jobs/postings', cmsController.getJobPostings);
router.post('/jobs/postings', authenticateToken, cmsController.createJobPosting);

// Changelogs routes
router.get('/changelogs', cmsController.getChangelogs);
router.post('/changelogs', authenticateToken, cmsController.createChangelog);

// Guides routes
router.get('/guides', cmsController.getGuides);
router.post('/guides', authenticateToken, cmsController.createGuide);

// Whitepapers routes
router.get('/whitepapers', cmsController.getWhitepapers);
router.post('/whitepapers', authenticateToken, cmsController.createWhitepaper);

export default router;