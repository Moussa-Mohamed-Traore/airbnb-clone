"use client";

import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
import { useUploadThing } from "@/utils/uploadthing";
interface ImageUploadProps {
  preview: string | null;
  onChange: (url: string) => void; // On change File par string
  onPreviewChange: (url: string) => void; // Pour afficher l'image pendant l'upload
}

export default function ImageUpload({ preview, onChange, onPreviewChange }: ImageUploadProps) {
  
  // Initialisation du hook UploadThing
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      const url = res?.[0].url;
      if (url) onChange(url); // On envoie l'URL finale au parent
    },
    onUploadError: () => {
      alert("Erreur lors de l'upload");
    },
  });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Afficher l'aperçu immédiatement
    onPreviewChange(URL.createObjectURL(file));

    // 2. Lancer l'upload vers UploadThing immédiatement
    await startUpload([file]);
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor="image-upload"
        className={`relative flex flex-col justify-center items-center gap-2 cursor-pointer rounded-2xl border-2 border-dashed border-gray-300 p-10 text-gray-600 hover:text-gray-400 min-h-80 transition ${isUploading ? 'opacity-50' : ''}`}
      >
        {!preview && (
          <>
            <TbPhotoPlus size={36} />
            <p className="font-medium">{isUploading ? "Uploading..." : "Click to upload"}</p>
          </>
        )}

        {preview && (
          <Image src={preview} alt="Preview" fill className="object-cover rounded-2xl" />
        )}

        <input
          type="file"
          id="image-upload"
          className="hidden"
          accept="image/*"
          onChange={handleUpload}
          disabled={isUploading}
        />
      </label>
    </div>
  );
}