import { getCurrentUser } from "@/server-actions/getCurrentUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Définition de la route "imageUploader"
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      // Cette partie vérifie si l'utilisateur est connecté avant l'upload
      const user = await getCurrentUser();
      
      if (!user) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload terminé pour l'id:", metadata.userId);
      console.log("URL du fichier:", file.url);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;