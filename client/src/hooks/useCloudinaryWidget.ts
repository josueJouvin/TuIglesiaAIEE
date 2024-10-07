import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

// Definiciones de tipos para Cloudinary
interface CloudinaryInterface {
  createUploadWidget: (options: UploadWidgetOptions, callback: UploadWidgetCallback) => CloudinaryWidget;
}

interface CloudinaryWidget {
  open: () => void;
}

interface UploadWidgetOptions {
  cloudName: string;
  uploadPreset: string;
  multiple: boolean;
  clientAllowedFormats: string[];
  resourceType: string;
  folder: string;
  maxImageFileSize: number;
  format: string;
  maxFiles: number;
}

interface UploadWidgetResult {
  event: string;
  info: {
    secure_url: string;
  };
}

type UploadWidgetCallback = (error: Error | null, result: UploadWidgetResult | null) => void;

// Extendemos Window para incluir cloudinary
declare global {
  interface Window {
    cloudinary: CloudinaryInterface;
  }
}

type UploadWidgetProps = {
  handleImageChange: (newAvatarUrl: string) => void;
  multiple: boolean;
  maxFiles: number;
  folder: string;
};

const useCloudinaryWidgets = ({
  handleImageChange,
  folder,
  maxFiles,
  multiple,
}: UploadWidgetProps) => {
  const cloudinaryRef = useRef<CloudinaryInterface>();
  const widgetRef = useRef<CloudinaryWidget>();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string,
        multiple,
        clientAllowedFormats: [
          "jpg",
          "jpeg",
          "png",
          "gif",
          "webp",
          "tiff",
          "bmp",
          "ico",
          "svg",
          "avif",
        ],
        resourceType: "image",
        folder,
        maxImageFileSize: 5000000,
        format: "auto",
        maxFiles,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          handleImageChange(result.info.secure_url);
        } else if (error) {
          toast.error("Error al cargar la imagen");
        }
      }
    );
  }, [handleImageChange, folder, maxFiles, multiple]);

  const openWidget = () => {
    widgetRef.current?.open();
  };

  return { openWidget };
};

export default useCloudinaryWidgets;