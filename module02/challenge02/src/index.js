import express from 'express';
import { router } from './gradesRoutes.js';

const app = express();

global.fileName = './src/grades.json';

app.use(express.json());
app.use('/grade', router);

export { app };
