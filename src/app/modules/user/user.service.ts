import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const result = await User.create(user)
  if (!result) {
    throw new ApiError(400, 'failed to create user')
  }
  return result
}

export const UserService = {
  createUser,
}
