import { Router } from 'express';
import {

    createUserController,
    getMe,
    loginUserController,
} from './user.controller';
import auth from '../../middlewares/auth';
// import auth from '../../middlewares/auth';




const router = Router();

router.route('/register').post(createUserController);

router.route('/login').post(loginUserController);
router.get('/me', auth('normalUser', 'manager', 'it'), getMe);



export const UserRoutes = router;
