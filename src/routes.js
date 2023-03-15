import express from 'express';
import courseRoutes from './modules/master/courses/route.js';
import lessonsGroup from './modules/master/lessonsGroups/route.js';
import lessons from './modules/master/lessons/route.js';
import lessonsContents from './modules/master/lessonsContents/route.js';
import lessonsGroupsMenu from './modules/menu/lessonsGroupsMenu/route.js';
import contents from './modules/content/getLessonsContents/route.js';
import auth from '../src/modules/user/auth/route.js';
import userProgressionRoutes from '../src/modules/user/userProgression/route.js';
import jwtMiddleware from '../src/modules/user/auth/middleware/middleware.js';

const router = express.Router();

router.use('/courses', jwtMiddleware, courseRoutes);
router.use('/groups', jwtMiddleware, lessonsGroup);
router.use('/lessons', jwtMiddleware, lessons);
router.use('/contents', jwtMiddleware, lessonsContents);
router.use('/menu', jwtMiddleware, lessonsGroupsMenu);
router.use('/lessonsContents', jwtMiddleware, contents);
router.use('/', auth);
router.use('/userProgression', jwtMiddleware, userProgressionRoutes);

export default router;
