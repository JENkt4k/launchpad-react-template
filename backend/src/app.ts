import express from 'express';
import { registerRoutes } from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register routes
registerRoutes(app);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;