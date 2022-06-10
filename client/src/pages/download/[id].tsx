import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { IFile } from "types/file";

const DownLoadLink: NextPage<{ file: IFile }> = ({
  file: { format, name, sizeInBytes, id },
}) => {
  return <div>{name}</div>;
};

export default DownLoadLink;

// dynamically getting the id of the link
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  let file = {};
  try {
    const { data } = await axios.get(`http://localhost:3000/download/${id}`);
    file = data;
  } catch (error: any) {
    console.log(error.response.data);
    file = {};
  }
  return {
    props: {
      file,
    },
  };
}
