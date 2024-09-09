import { Request, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { UpdateUserSchema } from "../schema/user.schema";
import { deleteImage } from "../config/cloudinary";

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (!id || !tokenUserId) {
    return res.status(400).json({ message: "ID de usuario faltante" });
  }

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "No Autorizado" });
  }

  try {
    // Parse request body
    const { username, email, avatar, newPassword, currentPassword } =
      UpdateUserSchema.parse(req.body);

    // Fetch the current user data
    const user = await prisma.user.findUnique({
      where: { id },
      select: { password: true, username: true, email: true, avatar: true},
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const isProfileUnchanged = (
      username === user.username &&
      email === user.email &&
      avatar === user.avatar &&
      !currentPassword &&
      !newPassword
    );

    if (isProfileUnchanged) {
      return res.status(400).json({ message: "No hay cambios en el perfil" });
    }

    // Check if username or email are already in use
    const existingUser = await prisma.user.findFirst({
      where: {
        AND: [
          username && username !== user.username ? { username } : {},
          email && email !== user.email ? { email } : {},
        ],
        NOT: { id },
      },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return res
          .status(400)
          .json({ message: "El nombre de usuario ya está en uso" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: "El Email ya está en uso" });
      }
    }

    if (avatar && user.avatar && user.avatar !== avatar) {
      await deleteImage(user.avatar);
    }
    // If new password is provided, validate and hash it
    if (newPassword && currentPassword) {
      if (!currentPassword) {
        return res
          .status(400)
          .json({
            message:
              "La contraseña actual es requerida para actualizar la contraseña",
          });
      }

      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ message: "La contraseña actual es incorrecta" });
      }

      const updatedPassword = await bcrypt.hash(newPassword, 10);

      // Update user with new password
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          username,
          email,
          password: updatedPassword,
          avatar
        },
      });
      const {password, ...rest} = updatedUser
      return res.status(200).json({message: "Perfil actualizado correctamente", data: rest});
    }else{
    // If no new password is provided, update username, email, and avatar
    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          username,
          email,
          avatar
        },
      });

      const {password, ...rest} = updatedUser
      return res.status(200).json({message: "Perfil actualizado correctamente", data: rest});
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "No Autorizado" });
  }

  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "Usuario Eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
};
