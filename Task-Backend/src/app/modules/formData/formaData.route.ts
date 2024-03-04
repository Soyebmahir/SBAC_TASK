import { Router } from 'express';
import { formDataController } from './formData.controller';
import validateRequest from '../../middlewares/validateRequest';
import { formDataValidations } from './formData.validator';

// import auth from '../../middlewares/auth';




const router = Router();

router.route('/').post(validateRequest(formDataValidations.formDataValidationSchema), formDataController.createFormData);
router.route('/').get(formDataController.getAllFormData)
router.route('/:userId').get(formDataController.formDataGetByUserId)
router.route('/data/:id').get(formDataController.formDataGetById)
router.route('/update/:id').patch(formDataController.updateFormData)


// router.route('/').get();



export const FormDataRoutes = router;
