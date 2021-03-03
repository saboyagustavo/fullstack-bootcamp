import { Router } from 'express';
import { CreateGrade } from './controllers/CreateGradeController.js';
import { DeleteGrade } from './controllers/DeleteGradeController.js';
import { ReadGrade } from './controllers/ReadGradeController.js';
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

export { router };
