import { Router } from "express";
const router = Router();

import fileUpload from "../controllers/files/fileUpload";
import upload from "../helpers/multerUpload";

router.post("/upload/file", upload.single("filesharing"), fileUpload);

export default router;
