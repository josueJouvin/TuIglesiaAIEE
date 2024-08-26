import z from "zod";

export const UserSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  username: z
    .string()
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",
    })
    .max(45, {
      message: "El nombre de usuario no puede tener más de 45 caracteres",
    })
    .regex(/^(?=.*[a-zA-Z])[a-zA-Z0-9_-]+$/, {
      message:
        "Debe contener al menos una letra y solo puede incluir números guiones",
    }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(/[a-zA-Z]/, {
      message: "La contraseña debe contener al menos una letra",
    })
    .regex(/[0-9]/, {
      message: "La contraseña debe contener al menos un número",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "La contraseña debe contener al menos un carácter especial",
    }),
  avatar: z.string().url({ message: "URL de avatar inválida" }).optional(),
});

export const UpdateUserSchema = UserSchema.extend({
  password: z.string().optional(),
  currentPassword: z.string().min(1, { message: "La contraseña actual es requerida para realizar cambios" }).optional(),
  newPassword: z.string()
    .min(8, { message: "La nueva contraseña debe tener al menos 8 caracteres" })
    .regex(/[a-zA-Z]/, {
      message: "La nueva contraseña debe contener al menos una letra",
    })
    .regex(/[0-9]/, {
      message: "La nueva contraseña debe contener al menos un número",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "La nueva contraseña debe contener al menos un carácter especial",
    })
    .optional()
    .or(z.literal('')),
}).refine((data) => {
  if (data.newPassword && data.newPassword !== '' && data.currentPassword === data.newPassword) {
    return false;
  }
  return true;
}, {
  message: "La nueva contraseña debe ser diferente a la contraseña actual",
  path: ["newPassword"],
});

export const LoginSchema = z.object({
  email: UserSchema.shape.email,
  password: UserSchema.shape.password
})