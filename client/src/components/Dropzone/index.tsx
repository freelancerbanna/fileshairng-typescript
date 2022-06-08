import React, { useState } from "react";
import DropZone from "./DropZone";

const DropzoneWrapper = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[10px] border-4 border-[#131332] shadow-2xl hover:cursor-pointer">
      <DropZone setFile={setFile} />
    </div>
  );
};

export default DropzoneWrapper;
