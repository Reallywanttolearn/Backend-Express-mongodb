import express from 'express';
import { getLessonContentsById } from './controllers/controller.js';
// import { trackUserProgression } from '../../user/userProgression/middleware/middleware.js';

const router = express.Router();

router.get('/:id', getLessonContentsById);

export default router;