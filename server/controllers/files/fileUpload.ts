// import multer from 'multer'
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

import { CLIENT_ENDPOINT } from "../../env";
import File from "../../models/File";

const fileUpload = async (req: any, res: any) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "Please provide a file" });

    let uploadedFile: UploadApiResponse;
    uploadedFile = await cloudinary.uploader.upload(req.file.path, {
      folder: "fakesharing",
      resource_type: "auto",
    });

    // destructurign required files
    const { originalname } = req.file;
    const { bytes, format, secure_url } = uploadedFile;

    const file = await File.create({
      fileName: originalname,
      secureUrl: secure_url,
      sizeInBytes: bytes,
      format,
    });
    res.status(200).json({
      id: file._id,
      downloadLink: `${CLIENT_ENDPOINT}download/${file._id}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default fileUpload;
