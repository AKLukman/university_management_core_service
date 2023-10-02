import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemeterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.createZodSchema),
  AcademicSemeterController.insertIntoDB
);
router.get('/', AcademicSemeterController.getAllFromDB);
router.get('/:id', AcademicSemeterController.getDataById);

export const AcademicSemesterRoutes = router;
