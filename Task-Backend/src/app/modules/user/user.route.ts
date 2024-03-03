import { Router } from 'express';
import {

    createUserController,
    loginUserController,
} from './user.controller';
// import auth from '../../middlewares/auth';




const router = Router();

router.route('/register').post(createUserController);

router.route('/login').post(loginUserController);



export const UserRoutes = router;
