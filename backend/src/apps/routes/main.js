import { Router } from 'express';

export const routes = Router();

routes.get('/', (req, res) => res.status(200).send({message: "Yo, the server is running."}));


