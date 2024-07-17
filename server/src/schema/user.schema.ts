import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  username: z
    .string()
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",
    })
    .max(45, {
      message: "El nombre de usuario no puede tener más de 45 caracteres",
    }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  avatar: z.string().url({ message: "URL de avatar inválida" }).optional(),
});


