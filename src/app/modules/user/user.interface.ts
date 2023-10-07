import { Model } from 'mongoose'

export type IUser = {
  name: string
  role: string
  adress?: string
  phoneNumber: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
