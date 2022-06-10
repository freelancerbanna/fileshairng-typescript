import { Router } from "express";
const router = Router();

import upload from "../helpers/multerUpload";
import fileUpload from "../controllers/files/fileUpload";
import fileDownload from "../controllers/files/fileDownload";

router.post("/upload/file", upload.single("filesharing"), fileUpload);
router.get("/download/file", fileDownload);

export default router;
