import express from 'express';
const router = express.Router();
import { getChatResponse } from '../controller/chatbot.js';

// Route for ChatGPT interactions
router.post('/chat', getChatResponse);

export default router;
