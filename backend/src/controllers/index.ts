import { Request, Response } from 'express';

export class IndexController {
    public static getIndex(req: Request, res: Response): void {
        res.json({ message: 'Welcome to the API' });
    }
}