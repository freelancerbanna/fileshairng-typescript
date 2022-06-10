import classNames from "classnames";
import Image from "next/image";
import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "image/*": [".png,.jpeg,.jpg"],
        "audio/*": [".mpeg,.mp3,.ogg"],
      },
    });
  return (
    <div className="p-4 w-[95%] cursor-pointer">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={classNames(
            "flex flex-col items-center justify-center border-2 border-dashed w-full p-5 border-[#9de1d7] rounded-[5px]",
            isDragReject && "border-red-600",
            isDragAccept && "border-green-600"
          )}
        >
          <div className="relative w-32 h-16 overflow-hidden">
            <Image
              src="/image/fileshare.png"
              alt="fake file sharing"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {isDragReject ? (
            <p className="text-red-600">This type of file is not supported</p>
          ) : (
            <>
              <p>Just Drag and Drop!</p>
              <div className="mt-4">
                Only jpeg,jpg,png and mp3 file supported
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZone;
