/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import httpStatus from 'http-status'
import AppError from '../../Errors/AppError'
import { TUser, TUserLogin } from './user.interface'
import { User } from './user.model'
import { createToken } from './user.utils'
import config from '../../config'
import { JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const createUserservices = async (userData: TUser) => {
  const user = await User.isUserExistsByemployeeId(userData.employeeId)

  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user is already exist!')
  }

  const newUser = await User.create(userData)

  const { _doc } = newUser as any
  const { password, __v, ...rest } = _doc

  return rest
}

export const loginUserService = async (payload: TUserLogin) => {
  const user = await User.isUserExistsWithPassword(payload.employeeId)

  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user is not found !')
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')
  }

  const jwtPayload = {

    employeeId: user.employeeId,
    email: user.email,
    role: user.role,
  }

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  )

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  )

  const { _doc } = user as any
  const {
    __v,
    createdAt,
    updatedAt,
    password,

    ...rest
  } = _doc

  return {
    accessToken,
    refreshToken,
    user: rest,
  }
}


