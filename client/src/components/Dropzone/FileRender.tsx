import { FunctionComponent } from "react";
import Image from "next/image";
import prettyBytes from "pretty-bytes";
//
import { IFile } from "types/file";

const FileRender: FunctionComponent<{ file: IFile }> = ({
  file: { format, name, sizeInBytes, id },
}) => {
  return (
    <div className="flex items-center p-4 w-4/5 justify-between">
      <div className="w-8 h-8 relative">
        <Image
          src={`/image/${format}.png`}
          alt="fake file sharing"
          layout="fill"
        />
      </div>
      <span>{name}</span>
      <span>{prettyBytes(sizeInBytes)}</span>
    </div>
  );
};

export default FileRender;
