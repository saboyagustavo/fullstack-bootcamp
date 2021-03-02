import { Router } from 'express';
import { CreateGrade } from './controllers/CreateGradeController.js';
import { DeleteGrade } from './controllers/DeleteGradeController.js';
import { UpdateGrade } from './controllers/UpdateGradeController.js';

const router = Router();

const createGrade = new CreateGrade();
router.post('/', createGrade.execute);

const updateGrade = new UpdateGrade();
router.put('/', updateGrade.execute);

const deleteGrade = new DeleteGrade();
router.delete('/:id', deleteGrade.execute);

export { router };
