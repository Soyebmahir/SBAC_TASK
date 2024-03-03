import { Router } from 'express';
import { formDataController } from './formData.controller';
import validateRequest from '../../middlewares/validateRequest';
import { formDataValidations } from './formData.validator';

// import auth from '../../middlewares/auth';




const router = Router();

router.route('/').post(validateRequest(formDataValidations.formDataValidationSchema), formDataController.createFormData);

// router.route('/').get();



export const FormDataRoutes = router;
