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
    <div className="p-4">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div>
          <div className="w-32 h-16 overflow-hidden relative">
            <Image
              src="/image/fileshare.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>Just Drag and Drop!</p>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
