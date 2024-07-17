import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import { UserSchema } from "../schema/user.schema";

export const register = async (req: Request, res: Response) => {
    try {
        // Validar los datos de entrada con Zod
        const userData = UserSchema.parse(req.body);

        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: userData.email },
                    { username: userData.username }
                ]
            }
        });

        if (existingUser) {
            return res.status(400).json({ message: "El email o nombre de usuario ya está en uso" });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Crear el nuevo usuario
        const newUser = await prisma.user.create({
            data: {
                username: userData.username,
                email: userData.email,
                password: hashedPassword,
                // Incluye avatar si está presente en userInput
                ...(userData.avatar && { avatar: userData.avatar })
            },
        });

        res.status(201).json({ message: "Usuario creado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear usuario" });
    }
};

export const login = async (req: Request, res: Response) => {
    const {username, password} = req.body

    try {
        const user = await prisma.user.findUnique({
            where:{
                username
            }
        })
    
        if(!user) return res.status(401).json({message: "Credenciales invalidas!"})

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) return res.status(401).json({message: "Credenciales invalidas!"})

        res.cookie("test2", "myvalue2", {
            httpOnly: true,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error al iniciar sesion!"})
    }
};

export const logout = (req: Request, res: Response) => {
    // Implementa la lógica de logout aquí
};