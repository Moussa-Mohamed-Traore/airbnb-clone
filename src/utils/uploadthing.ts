import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const Uploader = generateUploader<OurFileRouter>();

// C'est ici qu'on crée le hook dont je te parlais :
import { generateReactHelpers } from "@uploadthing/react";
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();