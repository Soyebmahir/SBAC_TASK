import { TFormData } from "./formData.interface";
import FormData from "./formData.model";

const createFormDataIntoDb = async (payload: TFormData) => {
    const result = await FormData.create(payload)
    return result;
}
const allFormDataGetFromDb = async () => {
    const result = await FormData.find()
    return result
}
const allFormDataGetByUserIdFromDB = async (userId: string) => {
    const result = await FormData.find({ 'applicantSignature.userId': userId })
    return result
}
const formDataSingleById = async (id: string) => {
    const result = await FormData.findById(id)
    return result
}
export const formDataServices = {
    createFormDataIntoDb,
    allFormDataGetFromDb,
    allFormDataGetByUserIdFromDB,
    formDataSingleById

}
