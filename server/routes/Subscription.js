// routes/Subscription.js
import express from 'express';

import { subscribe, subscription } from '../controller/Subscription.js';

const router = express.Router();

// // Middleware to protect subscription routes, only authenticated users should access
// router.use(authMiddleware);

// Route to create a new subscription for the user
router.post('/subscribe', subscribe);

// Route to get the current user's subscription details
router.get('/subscription', subscription);

export default router;
