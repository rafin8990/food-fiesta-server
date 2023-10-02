import { Model } from 'mongoose'

export type IUser = {
  name: string
  role: string
  adress?: string
  phoneNumer: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
