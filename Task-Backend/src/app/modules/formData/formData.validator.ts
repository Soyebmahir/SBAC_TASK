import { z } from 'zod';

const accessTypeValidationSchema = z.object({
    domainUser: z.boolean(),
    emailAddress: z.boolean(),
    internet: z.boolean(),
    usb: z.boolean()

})
const domainInformationValidationSchema = z.object({
    isDomain: z.boolean(),
    domainName: z.string().optional(),
    isEmail: z.boolean(),
    emailAddress: z.string().optional()

})
const ipInformationValidationSchema = z.object({
    ipAddress: z.string(),
    subnetMusk: z.string(),
    defaultGetWay: z.string(),
    isInternet: z.boolean()
})
const signatureValidationSchema = z.object({
    date: z.string(),
    isAgree: z.boolean(),
    userId: z.string()
})


const formDataValidationSchema = z.object({
    body: z.object({
        accessType: accessTypeValidationSchema,
        employeeId: z.string(),
        contactNumber: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        office: z.string(),
        designation: z.string(),
        requisition: z.string(),
        justification: z.string(),
        domainInformation: domainInformationValidationSchema,
        ipInformation: ipInformationValidationSchema,
        applicantSignature: signatureValidationSchema,
        managerSignature: signatureValidationSchema.optional(),
        itSignature: signatureValidationSchema.optional(),
        itImplement: signatureValidationSchema.optional()

    })
})
// const updateFormDataValidationSchema = z.object({
//     body: z.object({

//     })
// })


export const formDataValidations = {
    formDataValidationSchema,
};
