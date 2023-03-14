import Lessons from '../../../master/lessons/models/model.js';
import LessonsContents from '../../../master/lessonsContents/models/model.js';

const getLessonContents = async (lessonId) => {
    try {
        if (!lessonId) {
            throw new Error('Invalid lesson ID');
        }

        const lessonContents = await LessonsContents.findAll({
            where: { LessonId: lessonId },
            attributes: ['id', 'code', 'title', 'script', 'content', 'quiz', 'status', 'LessonId'],
        });

        return lessonContents;
    } catch (error) {
        console.log(error);
    }
};


export default getLessonContents;