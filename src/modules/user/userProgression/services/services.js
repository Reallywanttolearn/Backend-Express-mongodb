import UserProgression from '../models/model.js';

export const getUserProgressions = async () => {
    const userProgressions = await UserProgression.findAll();
    return userProgressions;
};

export const getUserProgressionById = async (id) => {
    const userProgression = await UserProgression.findByPk(id);
    return userProgression;
};

export const createUserProgression = async (userProgressionData) => {
    const userProgression = await UserProgression.create(userProgressionData);
    return userProgression;
};

export const updateUserProgression = async (id, userProgressionData) => {
    const [numRows, [updatedUserProgression]] = await UserProgression.update(
        {
            user_id: userProgressionData.user_id,
            course_id: userProgressionData.course_id,
            lesson_group_id: userProgressionData.lesson_group_id,
            lesson_id: userProgressionData.lesson_id,
            startTime: userProgressionData.startTime,
            endTime: userProgressionData.endTime,
            isCompleted: userProgressionData.isCompleted,
            completedTime: userProgressionData.completedTime,
            totalQuestions: userProgressionData.totalQuestions,
            answeredQuestions: userProgressionData.answeredQuestions,
            correctAnswers: userProgressionData.correctAnswers,
            score: userProgressionData.score,
        },
        { where: { id }, returning: true }
    );
    return numRows > 0 ? updatedUserProgression : null;
};

export const deleteUserProgression = async (id) => {
    const numRows = await UserProgression.destroy({ where: { id } });
    return numRows;
};
