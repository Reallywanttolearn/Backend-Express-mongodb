import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import dotenv from "dotenv";
import { findUserById } from '../services/services.js';

dotenv.config();

const authMiddleware = asyncHandler(async (req, res, next) => {
    // Get the JWT token from the Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];


    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the JWT token and decode its payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get the user from the database using the decoded userId
        const user = await findUserById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Set the user object on the request object for use in later middleware functions or route handlers
        req.user = user;

        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
});

export default authMiddleware;
