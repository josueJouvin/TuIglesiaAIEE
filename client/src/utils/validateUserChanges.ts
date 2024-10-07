import { UpdateUser, User } from "../types";

export const validateUserChanges = (data: UpdateUser, user: User | null) => {
  // Convertimos los objetos a cadenas JSON para realizar una comparación profunda
  const isUsernameSame = JSON.stringify(data.username) === JSON.stringify(user?.username);
  const isEmailSame = JSON.stringify(data.email) === JSON.stringify(user?.email);
  const isAvatarSame = JSON.stringify(data.avatar || "") === JSON.stringify(user?.avatar || "");
  
  // Comprobamos si hay contraseñas
  const isPasswordSame = !data.currentPassword && !data.newPassword;

  return isUsernameSame && isEmailSame && isAvatarSame && isPasswordSame;
};
