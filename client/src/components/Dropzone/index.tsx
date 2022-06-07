import React from "react";
import DropZone from "./DropZone";

const DropzoneWrapper = () => {
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[50px] border-4 border-[#131332] shadow-2xl hover:cursor-pointer">
      <DropZone />
    </div>
  );
};

export default DropzoneWrapper;
