import express from 'express';
import gradesRouter from './routes/gradesRoutes.js';

const app = express();

global.fileName = 'grades.json';

app.use(express.json());
app.use('/grade', gradesRouter);

app.listen(3000, () => {
    console.log('API STARTED ON PORT 3000');
});
