import { TFormData } from "./formData.interface";
import FormData from "./formData.model";

const createFormDataIntoDb = async (payload: TFormData) => {
    const result = await FormData.create(payload)
    return result;
}
export const formDataServices = {
    createFormDataIntoDb
}