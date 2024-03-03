/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { Schema, model } from "mongoose";
type TAccessType = {
    domainUser: boolean;
    emailAddress: boolean;
    internet: boolean;
    usb: boolean
}
type TDomain = {
    isDomain: boolean;
    domainName: string;
    isEmail: boolean;
    emailAddress: string;

}
type TIp = {

    ipAddress: string;
    subnetMusk: string;
    defaultGetWay: string;
    internet: boolean

}

type TApproveConfirm = {
    date: string;
    isAgree: boolean;
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    },

}


export interface TFormData {
    accessType: TAccessType,
    employeeId: string;
    contactNumber: string;
    firstName: string;
    lastName: string;
    office: string;
    designation: string;
    requisition: string;
    justification: string;
    domainInformation?: TDomain;
    ipInformation: TIp
    applicantSignature: TApproveConfirm;
    managerSignature?: TApproveConfirm;
    itSignature?: TApproveConfirm;
    itImplement: TApproveConfirm




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
