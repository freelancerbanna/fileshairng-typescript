import { Router } from "express";
const router = Router();

import upload from "../helpers/multerUpload";
import fileUpload from "../controllers/files/fileUpload";
import fileInfo from "../controllers/files/fileInfo";
import fileDownload from "../controllers/files/fileDownload";

router.post("/upload/file", upload.single("filesharing"), fileUpload);
router.get("/file/:id", fileInfo);
router.get("/file/:id/download", fileDownload);

export default router;
