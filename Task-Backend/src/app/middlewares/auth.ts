import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TUserRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
// import AppError from '../errors/AppError';
import config from '../config';
import { User } from '../modules/user/user.model';
import AppError from '../Errors/AppError';

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;


        // checking if the token is missing
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
        }
        console.log("auth string");
        // checking if the given token is valid
        const decoded = jwt.verify(
            token,
            config.jwt_access_secret as string,
        ) as JwtPayload;

        const { role, employeeId, iat } = decoded;

        // console.log(decoded)

        // checking if the user is exist
        const user = await User.isUserExistsByemployeeId(employeeId);

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
        }



        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                'You are not authorized !',
            );
        }

        req.user = decoded as JwtPayload & { role: string };
        next();
    });
};

export default auth;
