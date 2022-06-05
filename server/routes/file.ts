import { Router } from "express";
import multer from "multer";
const router = Router();

const storage = multer.diskStorage({});

let upload = multer({
  storage,
});
router.get("/api", (req, res) => {
  res.send("Working");
});

router.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "Please provide a file" });
    console.log(req.file);
  } catch (err) {
    res.status(500).json({ message: "Sorry you need a file to upload" });
  }
});

export default router;