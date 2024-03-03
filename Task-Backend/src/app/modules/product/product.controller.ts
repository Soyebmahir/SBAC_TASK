import httpStatus from "http-status";
import AppError from "../../Errors/AppError";
import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";

const createProduct = catchAsync(async (req, res) => {
    console.log(req.body);
    const result = await ProductServices.createProductIntoDb(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Create Successfully.',
        data: result
    })



})

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductsFromDb()
    if (!result.length) {
        throw new AppError(httpStatus.NOT_FOUND, 'No Product available')
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Found Successfully.',
        data: result
    })
})
const getSingleAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getSingleProductsFromDb(req.params.id)
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, `No Product available with this (${req.params.id}) Id`)
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Found Successfully.',
        data: result
    })
})
export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleAllProducts
}