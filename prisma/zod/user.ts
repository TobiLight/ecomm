import * as z from "zod"
import { Role } from "@prisma/client"

export const UserModel = z.object({
  id: z.string().uuid(),
  name: z.string().nullish(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  role: z.nativeEnum(Role),
})
