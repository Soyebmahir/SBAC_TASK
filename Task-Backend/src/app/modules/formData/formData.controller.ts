import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { formDataServices } from "./formData.services";

const createFormData = catchAsync(async (req, res) => {
    // console.log('controller', req.body);
    const result = await formDataServices.createFormDataIntoDb(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Form Data posted SuccessFully',
        data: result,
    });
});
const getAllFormData = catchAsync(async (req, res) => {
    const result = await formDataServices.allFormDataGetFromDb()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Found all Form Data  SuccessFully',
        data: result,
    });
})
const formDataGetByUserId = catchAsync(async (req, res) => {
    const result = await formDataServices.allFormDataGetByUserIdFromDB(req.params.userId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Found all FormData of the user SuccessFully',
        data: result,
    });
})
const formDataGetById = catchAsync(async (req, res) => {
    const result = await formDataServices.formDataSingleById(req.params.id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Found Single FormData by Id SuccessFully',
        data: result,
    });
})
export const formDataController = {
    createFormData,
    getAllFormData,
    formDataGetByUserId,
    formDataGetById

}
