import z from "zod";

// Esquema de contraseña reutilizable
const passwordSchema = z
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
  });

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
  password: passwordSchema,
  avatar: z.string().url({ message: "URL de avatar inválida" }).optional(),
});

export const UpdateUserSchema = z.object({
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
    avatar: z.string().url({ message: "URL de avatar inválida" }).optional(),
  currentPassword: z.string().optional(),
  newPassword: z.string().optional(),
}).superRefine((data, ctx) => {
  // Si uno de los campos de contraseña está presente, ambos son requeridos
  if ((data.currentPassword || data.newPassword) && (!data.currentPassword || !data.newPassword)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Ambos campos de contraseña son requeridos para cambiar la contraseña",
      path: ["newPassword"], // Puedes cambiar la ruta si prefieres que el error aparezca en `currentPassword`
    });
  }

  // Validación de currentPassword usando el esquema de contraseña
  if (data.currentPassword) {
    const currentPasswordValidation = passwordSchema.safeParse(data.currentPassword);
    if (!currentPasswordValidation.success) {
      currentPasswordValidation.error.issues.forEach(issue => {
        ctx.addIssue({
          ...issue,
          path: ["currentPassword"],
        });
      });
    }
  }

  // Validación de newPassword usando el esquema de contraseña
  if (data.newPassword) {
    const newPasswordValidation = passwordSchema.safeParse(data.newPassword);
    if (!newPasswordValidation.success) {
      newPasswordValidation.error.issues.forEach(issue => {
        ctx.addIssue({
          ...issue,
          path: ["newPassword"],
        });
      });
    }
  }

  // Asegurarse de que la nueva contraseña sea diferente a la actual
  if (data.currentPassword && data.newPassword && data.currentPassword === data.newPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "La nueva contraseña debe ser diferente a la contraseña actual",
      path: ["newPassword"],
    });
  }
});

export const UserLoginSchema = UserSchema.omit(
  {
    username: true,
    avatar: true
  }
);