import { FunctionComponent } from "react";
import prettyBytes from "pretty-bytes";
//
import { IFile } from "types/file";
import Img from "libs/Img";

const FileRender: FunctionComponent<{ file: IFile }> = ({
  file: { format, name, sizeInBytes, id },
}) => {
  return (
    <div className="flex flex-col w-4/5 p-4">
      <div className="flex items-center justify-between">
        <div className="relative w-8 h-8">
          <Img src={`/image/${format}.png`} />
        </div>
        <span>{name}</span>
        <span>{prettyBytes(sizeInBytes)}</span>
      </div>
    </div>
  );
};

export default FileRender;
