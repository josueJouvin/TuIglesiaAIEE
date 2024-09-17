import { useEffect, useRef} from "react";
import { toast } from "react-toastify";

type UploadWidgetProps = {
  handleImageChange: (newAvatarUrl: string) => void
  multiple: boolean
  maxFiles: number
  folder: string
  
}

const useCloudinaryWidgets = ({handleImageChange,folder,maxFiles,multiple}: UploadWidgetProps) => {

  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      multiple: multiple,
      clientAllowedFormats: ["jpg", "jpeg", "png", "gif", "webp", "tiff", "bmp", "ico", "svg", "avif"],
      resourceType: "image",
      folder: folder,
      maxImageFileSize: 5000000,
      format: "auto",
      maxFiles: maxFiles,
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