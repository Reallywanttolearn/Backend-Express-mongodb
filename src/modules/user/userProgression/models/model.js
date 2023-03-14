import { sequelize, Sequelize } from '../../../../helpers/modelHelpers.js';

const UserProgression = sequelize.define('UserProgression', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Courses',
            key: 'id'
        }
    },
    lessonGroupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'LessonsGroups',
            key: 'id'
        }
    },
    lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Lessons',
            key: 'id'
        }
    },
    startTime: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    endTime: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    completedTime: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    totalQuestions: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    answeredQuestions: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    correctAnswers: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    score: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }
}, {
    schema: 'public',
    tableName: 'userProgression',
    timestamps: true,
});

export default UserProgression;
