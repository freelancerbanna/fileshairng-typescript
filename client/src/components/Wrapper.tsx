import React, { FunctionComponent, ReactNode } from "react";
import DownloadLink from "./Download";

const Wrapper: FunctionComponent<{
  children: ReactNode;
  downloadLink: any;
}> = ({ children, downloadLink }) => {
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[10px] border-4 border-[#131332] shadow-2xl  flex-col">
      {children}
      {downloadLink && <DownloadLink />}
    </div>
  );
};

export default Wrapper;
