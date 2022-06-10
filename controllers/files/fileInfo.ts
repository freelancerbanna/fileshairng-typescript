import File from "../../models/File";

const fileInfo = async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const file = await File.findById(id);
    if (!file) {
      res.status(404).json({ message: "There is no file with this id." });
    }
    //

    res.status(200).json({
      name: file?.fileName,
      sizeInBytes: file?.sizeInBytes,
      format: file?.format,
      id,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};
export default fileInfo;
