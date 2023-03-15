import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./src/routes.js";
import { sequelize } from './src/helpers/modelHelpers.js';
import { defineAssociations } from './src/config/relation.js';
import { createLogger, format, transports } from "winston";
import helmet from 'helmet';
import asyncHandler from 'express-async-handler';
import session from 'express-session';

const { combine, timestamp, label, printf } = format;

dotenv.config();
const app = express();

(async () => {
    try {
        await sequelize.sync();
        defineAssociations();
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    level: "info",
    format: combine(
        label({ label: "Logging" }),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" })
    ]
});

app.use(cors());
app.use(express.json());
app.use(helmet());

// Add session middleware and configure it
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'development' } // Set secure cookie for production environment
}));

app.use('/api', route);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send("Something went wrong.");
});

const port = process.env.PORT;

app.listen(port, asyncHandler(() => {
    console.log(`Server up and running on port ${port}...`);
}));
