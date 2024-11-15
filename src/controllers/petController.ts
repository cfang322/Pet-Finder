import { Request, Response } from 'express';

export const getAllPets = (req: Request, res: Response) => {
    // console.log('Request received for getAllPets controller');
    res.json({ message: 'List of all pets from controller' });
} ;  