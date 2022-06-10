import File from "../../models/File";
import https from "https";

const fileDownload = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const file = await File.findById(id);
    if (!file) {
      res.status(404).json({ message: "There is no file with this id." });
    }
    //
    https.get(file!.secureUrl, (fileStream) => {
      fileStream.pipe(res);
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
export default fileDownload;
