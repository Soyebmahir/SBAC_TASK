/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {

    employeeId: string;
    email: string;
    password: string;

    role: 'normalUser' | 'manager' | 'it';
}

export interface UserModel extends Model<TUser> {
    isUserExistsByemployeeId(employeeId: string): Promise<TUser>;
    isUserExistsWithPassword(employeeId: string): Promise<TUser>;
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string,
    ): Promise<boolean>;

}

export type TUserLogin = {
    employeeId: string;
    password: string;
};

export type TUserRole = keyof typeof USER_ROLE;
