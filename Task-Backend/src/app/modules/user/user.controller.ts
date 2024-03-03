import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import {
  createUserservices,
  loginUserService,
} from './user.service'

export const createUserController = catchAsync(async (req, res) => {
  const result = await createUserservices(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created succesfully',
    data: result,
  })
})

export const loginUserController = catchAsync(async (req, res) => {

  const result = await loginUserService(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successful',
    data: result,
  })
})


