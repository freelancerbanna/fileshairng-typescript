import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });
  return (
    <div className="p-4 w-[95%]">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center border-2 border-dashed w-full p-5 border-[#9de1d7] rounded-[5px]">
          <div className="w-32 h-16 overflow-hidden relative">
            <Image
              src="/image/fileshare.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Just Drag and Drop!</p>
          <div className="mt-4">Only jpeg,jpg,png and mp3 file supported</div>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
