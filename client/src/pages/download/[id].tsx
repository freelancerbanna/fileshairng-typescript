import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import prettyBytes from "pretty-bytes";

import { IFile } from "types/file";
import Img from "libs/Img";
import { Wrapper } from "components";
//
const DownLoadLink: NextPage<{ file: IFile }> = ({
  file: { format, name, sizeInBytes, id },
}) => {
  return (
    <div className="p-4 w-[95%]">
      {!id ? (
        <span>
          <h1>Opps! There is no file you're finding</h1>
        </span>
      ) : (
        <Wrapper>
          <div className="flex flex-col items-center justify-center w-full border-2 border-dashed p-5 border-[#9de1d7] rounded-[5px] shadow-lg">
            <div className="w-12 h-12 rounded-[50%] overflow-hidden relative my-2">
              <Img src="/image/download.png" />
            </div>
            <h2 className="text-center">
              Congratulations! You're file is ready to be download
            </h2>
            <div className="flex flex-col w-4/5 p-4">
              <div className="flex items-center justify-between">
                <div className="relative w-8 h-8">
                  <Img src={`/image/${format}.png`} />
                </div>
                <span>{name}</span>
                <span>{prettyBytes(sizeInBytes)}</span>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default DownLoadLink;

// dynamically getting the id of the link
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  let file;
  try {
    const { data } = await axios.get(`http://localhost:8000/api/file/${id}`);
    file = data;
  } catch (error: any) {
    console.log(error.response);
    file = {};
  }
  return {
    props: {
      file,
    },
  };
}
