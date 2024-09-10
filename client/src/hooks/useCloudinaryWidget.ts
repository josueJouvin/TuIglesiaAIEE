import { useEffect, useRef} from "react";
import { toast } from "react-toastify";

interface UploadWidgetProps {
  handleImageChange: (newAvatarUrl: string) => void;
}

const useCloudinaryWidgets = ({handleImageChange}: UploadWidgetProps) => {

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
    }, function(error, result){
      if (!error && result && result.event === 'success') {
        handleImageChange(result.info.secure_url); // Guarda la URL de la imagen subida en el estado
      } else if (error) {
        toast.error('Error al cargar la imagen');
      }
    })
  }, [handleImageChange])

  const openWidget = () => {
    widgetRef.current.open()
  };

  return { openWidget };
};

export default useCloudinaryWidgets;