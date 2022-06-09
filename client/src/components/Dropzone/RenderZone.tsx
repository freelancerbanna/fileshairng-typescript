import React, { FunctionComponent } from "react";

import FileRender from "./FileRender";

const RenderZone: FunctionComponent<{ file: string | any }> = ({ file }) => {
  return (
    <div className="p-4 w-[95%]">
      <div className="flex flex-col items-center justify-center w-full border-2 border-dashed p-5 border-[#9de1d7] rounded-[5px]">
        <FileRender
          file={{
            format: file.type.split("/")[1],
            name: file.name,
            sizeInBytes: file.size,
          }}
        />

        <button className="bg-[#131332] my-5 rounded-[10px] p-2.5 w-3/5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RenderZone;
