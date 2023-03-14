import jwt from 'jsonwebtoken';
import User from '../models/model.js';

const authMiddleware = async (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Missing token' });
    }

    try {
        // Verify the token using the secret key
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Find the user in the database
        const user = await User.findByPk(decodedToken.userId);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Add the user object to the request object for later use
        req.user = user;

        // Call the next middleware function
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
