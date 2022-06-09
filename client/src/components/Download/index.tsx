import { FunctionComponent, useState } from "react";
import toast from "react-hot-toast";
//
import Img from "libs/Img";

const DownloadLink: FunctionComponent<{ downloadLink: any }> = ({
  downloadLink,
}) => {
  const handleClick = () => {
    navigator.clipboard.writeText(downloadLink);
    toast.success("Copied to clipboard", {
      duration: 1500,
      position: "bottom-right",
    });
  };
  return (
    <div className="p-5 mb-2 flex flex-col items-center justify-center border-2 border-dashed w-[90%] border-[#9de1d7] rounded-[5px]">
      <h2 className="my-2 text-base font-medium text-green-600">
        Please copy this downloadable link and paste this to new tab.
      </h2>
      <div className="flex items-center space-x-4">
        <span className="flex items-center break-all">{downloadLink}</span>
        <span
          className="w-8 h-8 relative object-cover overflow-hidden rounded-[50%] bg-transparent cursor-pointer"
          onClick={handleClick}
        >
          <Img src="/image/copy.png" />
        </span>
      </div>
    </div>
  );
};

export default DownloadLink;
