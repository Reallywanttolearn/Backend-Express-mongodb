import { sequelize, Sequelize } from '../../../../helpers/modelHelpers.js';
import Lessons from '../../lessons/models/model.js';

const LessonsContents = sequelize.define('LessonsContents', {
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    script: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quiz: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    LessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Lessons,
            key: 'id'
        }
    }
}, { schema: 'public' });

export default LessonsContents;