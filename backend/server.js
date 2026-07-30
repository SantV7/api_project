import 'dotenv/config';

import express from 'express';

import { routes } from './src/routes/main.js';

const app = express();

app.use(express.json());

app.use(routes);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));