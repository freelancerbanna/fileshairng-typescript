import { FunctionComponent } from "react";
import Image from "next/image";
//
import { IFile } from "types/file";

const FileRender: FunctionComponent<{ file: IFile }> = ({
  file: { format, name, sizeInBytes, id },
}) => {
  return (
    <div className="flex items-center p-4">
      <div className="w-14 h-14 relative">
        <Image
          src={`/image/${format}.png`}
          alt="fake file sharing"
          layout="fill"
        />
      </div>
      <span>{name}</span>
      <span>{sizeInBytes}</span>
    </div>
  );
};

export default FileRender;
