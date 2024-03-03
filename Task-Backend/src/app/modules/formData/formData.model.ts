import { Schema, model } from "mongoose";
import { TAccessType, TDomain, TFormData, TIp } from "./formData.interface";

const accessTypeSchema = new Schema<TAccessType>({
    domainUser: {
        type: Boolean,
    },
    emailAddress: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    usb: {
        type: Boolean
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
const itInformationSchema = new Schema<TIp>({
    ipAddress: {
        type: String,

    },
    subnetMusk: {
        type: String
    },
    defaultGetWay: {
        type: String
    },
    internet: {
        type: Boolean
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
    ipInformation:

        createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},
    updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
}
})

const FormData = model<TFormData>('FormData', formDataSchema)
export default FormData;