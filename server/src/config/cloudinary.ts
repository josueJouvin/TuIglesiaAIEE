import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});


export async function deleteImage(publicId: string) {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error("Error al eliminar la imagen:", error);
        throw new Error("Error al eliminar la imagen");
    }
}

export async function uploadImage(filePath: any) {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "cestino",
            format: "auto",
            transformation: [
                { width: 1000, height: 1000, crop: "fill", gravity: "auto" },
                { quality: "auto", fetch_format: "auto" }
            ]
        });
        return result;
    } catch (error) {
        console.error("Error al subir la imagen:", error);
        throw new Error("Error al subir la imagen o la imagen es muy pesada");
    }
}