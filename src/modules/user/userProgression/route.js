// modules/userProgression/routes.js
import express from 'express';
import {
    getUserProgressions,
    getUserProgressionById,
    createUserProgression,
    updateUserProgression,
    deleteUserProgression
} from './controllers/controller.js';

const router = express.Router();

router.get('/', getUserProgressions);
router.get('/:id', getUserProgressionById);
router.post('/', createUserProgression);
router.put('/:id', updateUserProgression);
router.delete('/:id', deleteUserProgression);


export default router;
