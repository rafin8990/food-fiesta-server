import { Schema, model } from 'mongoose'
import { IUser as MyUser, UserModel } from './user.interface'

const userSchema = new Schema<MyUser, Record<string, never>>({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
  },
  phoneNumer: {
    type: Number,
    required: true,
    unique: true,
  },
})

export const User = model<MyUser, UserModel>('User', userSchema)
