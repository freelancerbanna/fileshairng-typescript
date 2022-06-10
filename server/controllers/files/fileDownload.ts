import File from "../../models/File";

const fileDownload = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const file = await File.findById(id);
    console.log(file);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
export default fileDownload;
