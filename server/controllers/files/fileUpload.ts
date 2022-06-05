const fileUpload = async (req: any, res: any) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "Please provide a file" });
    console.log(req.file);
  } catch (err) {
    res.status(500).json({ message: "Sorry you need a file to fileUpload" });
  }
};

export default fileUpload;
