import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import errorHandler from './_middleware/error-handler';
import userRoutes from './users/users.controller';
import db from './_helpers/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ensure database is initialized before handling requests
(async () => {
    try {
        if (db.sequelize) {
            await db.sequelize.authenticate();
            console.log('Database connection established successfully');
        } else {
            throw new Error('Sequelize instance is not initialized');
        }
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        process.exit(1); // Exit the process if the database connection fails
    }
})();

// API routes
app.use('/users', userRoutes);

// Global error handler
app.use('/_middleware', errorHandler);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

export default app;
