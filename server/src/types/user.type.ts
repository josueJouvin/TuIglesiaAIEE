import { z } from "zod"
import { UserSchema } from "../schema/user.schema";

export type UserInput = z.infer<typeof UserSchema>;