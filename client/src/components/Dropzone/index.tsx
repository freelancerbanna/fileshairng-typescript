import React, { useState } from "react";
import DropZone from "./DropZone";
import RenderZone from "./RenderZone";

const DropzoneWrapper = () => {
  const [file, setFile] = useState(null!);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("filesharing", file);
  };
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[10px] border-4 border-[#131332] shadow-2xl  flex-col">
      <DropZone setFile={setFile} />
      {file && <RenderZone file={file} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default DropzoneWrapper;
