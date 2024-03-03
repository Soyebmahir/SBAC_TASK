import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { formDataServices } from "./formData.services";

const createFormData = catchAsync(async (req, res) => {

    const result = await formDataServices.createFormDataIntoDb(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Form Data posted SuccessFully',
        data: result,
    });
});
export const formDataController = {
    createFormData
}
