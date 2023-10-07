/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'

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
      console.log(error)
    }
  },
)

export const UserController = {
  createUser,
}
