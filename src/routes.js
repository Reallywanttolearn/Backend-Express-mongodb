import express from 'express';
import courseRoutes from './modules/master/courses/route.js';
import lessonsGroup from './modules/master/lessonsGroups/route.js';
import lessons from './modules/master/lessons/route.js';
import lessonsContents from './modules/master/lessonsContents/route.js';
import lessonsGroupsMenu from './modules/menu/lessonsGroupsMenu/route.js';
import contents from './modules/content/getLessonsContents/route.js';
import auth from '../src/modules/user/auth/route.js';
import userProgressionRoutes from '../src/modules/user/userProgression/route.js';

const router = express.Router();

router.use('/courses', courseRoutes);
router.use('/groups', lessonsGroup);
router.use('/lessons', lessons);
router.use('/contents', lessonsContents);
router.use('/menu', lessonsGroupsMenu);
router.use('/lessonsContents', contents);
router.use('/', auth);
router.use('/userProgression', userProgressionRoutes);

export default router;
