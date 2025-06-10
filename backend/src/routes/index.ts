import { Application } from 'express';
import { IndexController } from '../controllers/index';

export const registerRoutes = (app: Application): void => {
    app.get('/', IndexController.getIndex);
};