import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    phoneNumber: z.number({
      required_error: 'phone number is required',
    }),
    role: z.string({
      required_error: 'role is required',
    }),
    adress: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
