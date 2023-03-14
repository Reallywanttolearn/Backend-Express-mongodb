// middleware.js
import { createUserProgression } from '../services/services.js';

export const trackUserProgression = async (req, res, next) => {
    try {
        // extract necessary information from request
        const userId = req.user.id;
        const courseId = req.body.courseId;
        const lessonGroupId = req.body.lessonGroupId;
        const lessonId = req.body.lessonId;

        // create new user progression record
        await createUserProgression({
            user_id: userId,
            course_id: courseId,
            lesson_group_id: lessonGroupId,
            lesson_id: lessonId,
            startTime: new Date(),
            isCompleted: false,
            totalQuestions: 0,
            answeredQuestions: 0,
            correctAnswers: 0,
            score: 0,
        });

        // pass control to the next middleware/controller
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
