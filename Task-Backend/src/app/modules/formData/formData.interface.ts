/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import { Schema, Types, model } from "mongoose";
export type TAccessType = {
    domainUser: boolean;
    emailAddress: boolean;
    internet: boolean;
    usb: boolean
}
export type TDomain = {
    isDomain: boolean;
    domainName: string;
    isEmail: boolean;
    emailAddress: string;

}
export type TIp = {

    ipAddress: string;
    subnetMusk: string;
    defaultGetWay: string;
    isInternet: boolean

}

export type TApproveConfirm = {
    date: string;
    isAgree: boolean;
    userId: Types.ObjectId,

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



