/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import ApiError from '../../../errors/ApiError'
import { UserService } from './user.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    try {
      const { ...user } = req.body
      console.log(user)
      const result = await UserService.createUser(user)
      res.status(200).json({
        success: true,
        message: 'user created successfully',
        data: result,
      })
    } catch (error: any) {
      if (error.code === 11000) {
        throw new ApiError(500, 'Phone number already exist')
      }
    }
  },
)

export const UserController = {
  createUser,
}
