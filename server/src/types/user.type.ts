import { z } from "zod"
import { LoginSchema, UserSchema } from "../schema/user.schema";

  
export type UserRegisterInput = z.infer<typeof UserSchema>;
export type UsLoginInput = z.infer<typeof LoginSchema>