import { useEffect, useRef } from "react";
import { useUserStore } from "../stores/auth.store";


interface UploadWidgetProps {
  handleImageChange: (newAvatarUrl: string) => void;
}


const UploadWidget = ({handleImageChange}: UploadWidgetProps) => {
  const user = useUserStore((state) => state.user);
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      multiple: false,
      clientAllowedFormats: ["jpg", "jpeg", "png", "gif", "webp", "tiff", "bmp", "ico", "svg", "avif"],
      resourceType: "image",
      folder: "AvatarsAIEE",
      maxImageFileSize: 5000000,
      format: "auto"
    },function(error, result){
      if (!error && result && result.event === 'success') {
        handleImageChange(result.info.secure_url); // Guarda la URL de la imagen subida en el estado
      }})

  },[handleImageChange])

  return (
      <button className="w-full mt-5 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 md:w-3/4 lg:w-auto" onClick={()=> widgetRef.current.open()}>{user?.avatar ? "Actualizar Imagen" : "Seleccionar y Subir Imagen"}</button>
  );
};

export default UploadWidget;
