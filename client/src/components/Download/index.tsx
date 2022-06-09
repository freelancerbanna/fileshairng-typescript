import Img from "libs/Img";
import { FunctionComponent } from "react";

const DownloadLink: FunctionComponent<{ downloadLink: any }> = ({
  downloadLink,
}) => {
  console.log(downloadLink);
  return (
    <div className="p-5 my-2">
      <h2 className="my-2 text-base font-medium text-green-600">
        Please copy this downloadable link and paste this to new tab.
      </h2>
      <div className="flex items-center space-x-4">
        <span className="flex items-center break-all">{downloadLink}</span>
        <span
          className="w-8 h-8 relative object-cover overflow-hidden rounded-[50%]"
          onClick={() => navigator.clipboard.writeText(downloadLink)}
        >
          <Img src="/image/copy.png" />
        </span>
      </div>
    </div>
  );
};

export default DownloadLink;
