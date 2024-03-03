import { Schema, model } from "mongoose";
import { TAccessType, TApproveConfirm, TDomain, TFormData, TIp } from "./formData.interface";

const accessTypeSchema = new Schema<TAccessType>({
    domainUser: {
        type: Boolean,
        default: false
    },
    emailAddress: {
        type: Boolean,
        default: false
    },
    internet: {
        type: Boolean,
        default: false
    },
    usb: {
        type: Boolean,
        default: false
    }
})
const domainInformationSchema = new Schema<TDomain>({
    isDomain: {
        type: Boolean,
        default: false
    },
    domainName: {
        type: String,

    },
    isEmail: {
        type: Boolean,
        default: false
    },
    emailAddress: {
        type: String
    }
})
const ipInformationSchema = new Schema<TIp>({
    ipAddress: {
        type: String,

    },
    subnetMusk: {
        type: String
    },
    defaultGetWay: {
        type: String
    },
    isInternet: {
        type: Boolean,
        default: false
    }
})
const signatureSchema = new Schema<TApproveConfirm>({
    date: {
        type: String
    },
    isAgree: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    }
})

const formDataSchema = new Schema<TFormData>({
    accessType: {
        type: accessTypeSchema,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    requisition: {
        type: String,
        required: true
    },
    justification: {
        type: String,
        required: true
    },
    domainInformation: {
        type: domainInformationSchema,
    },
    ipInformation: {
        type: ipInformationSchema
    },
    applicantSignature: {
        type: signatureSchema
    },

    managerSignature: {
        type: signatureSchema
    },
    itSignature: {
        type: signatureSchema
    },
    itImplement: {
        type: signatureSchema
    },
})

const FormData = model<TFormData>('FormData', formDataSchema)
export default FormData;