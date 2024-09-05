import prisma from "../lib/prisma";
import { Request, Response } from "express";

export const getPosts = async(req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error al hacer get a los posts"})
    }
}

export const getPost = async(req: Request, res: Response) => {
    const id = req.params.id
    try {
        const post = await prisma.post.findUnique({
            where: {id}
        })
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error al hacer get a post"})
    }
}

export const addPost = async(req: Request, res: Response) => {
    const body = req.body
    const tokenUserId = req.userId

    try {
        const newPost = await prisma.post.create({
            data: {
                ...body,
                userId: tokenUserId
            }
        })
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error crear post"})
    }
}

export const updatePost = async(req: Request, res: Response) => {
    try {
        res.status(200).json()
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error al actualizar post"})
    }
}

export const deletePost = async(req: Request, res: Response) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "No Autorizado" });
    }

    try {
        await prisma.post.delete({
        where: { id },
        });
        res.status(200).json({ message: "Usuario Eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar usuario" });
    }
}