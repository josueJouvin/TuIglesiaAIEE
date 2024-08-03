import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const shouldLoggedIn = async (req: Request, res: Response) => {
  console.log(req.userId);

  res.status(200).json({ message: "Estas autenticado" });
};

export const shouldAdmin = async (req: Request, res: Response) => {};
