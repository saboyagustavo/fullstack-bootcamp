import { Router } from 'express';
import { AverageGrade } from './controllers/AverageGradeController.js';
import { CreateGrade } from './controllers/CreateGradeController.js';
import { DeleteGrade } from './controllers/DeleteGradeController.js';
import { ReadGrade } from './controllers/ReadGradeController.js';
import { TopGrade } from './controllers/TopGradeController.js';
import { TotalGrade } from './controllers/TotalGradeController.js';
import { UpdateGrade } from './controllers/UpdateGradeController.js';

const router = Router();

const createGrade = new CreateGrade();
router.post('/', createGrade.execute);

const updateGrade = new UpdateGrade();
router.put('/', updateGrade.execute);

const deleteGrade = new DeleteGrade();
router.delete('/:id', deleteGrade.execute);

const readGrade = new ReadGrade();
router.get('/:id', readGrade.execute);

const totalGrade = new TotalGrade();
router.post('/totalGrade', totalGrade.execute);

const averageGrade = new AverageGrade();
router.get('/average/:subject/:type', averageGrade.execute);

const topGrade = new TopGrade();
router.post('/top', topGrade.execute);
export { router };
