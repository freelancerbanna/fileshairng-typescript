import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import ScaleLoader from "react-spinners/ScaleLoader";

//
import { Wrapper, DownloadLink } from "components";
import DropZone from "./DropZone";
import RenderZone from "./RenderZone";

const DropzoneWrapper = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [id, setId] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  //
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("filesharing", file);
    setLoading(true);
    //
    setTimeout(async () => {
      try {
        const { data } = await axios({
          method: "POST",
          data: formData,
          url: "/upload/file",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        data && setLoading(false);
        data &&
          Swal.fire({
            title: "Successfully uploaded",
            text: "You are almosst therer! Please see a donwload link will be there copy and paste that to new tab from your browser",
            icon: "success",
            confirmButtonText: "ok",
          });
        console.log(data);

        data && setFile("");
        data && setDownloadLink(data.downloadLink);
        data && setId(data.id);
      } catch (error: any) {
        setLoading(false);
        Swal.fire({
          title: "Error!",
          text: error.response.data,
          icon: "error",
          confirmButtonText: "ok",
        });
      }
    }, 500);
  };
  return (
    <>
      {loading ? (
        <ScaleLoader color="#FDD757" />
      ) : (
        <Wrapper>
          {<DropZone setFile={setFile} />}
          {file && <RenderZone file={file} handleSubmit={handleSubmit} />}
          {downloadLink && !file && (
            <DownloadLink downloadLink={downloadLink} />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default DropzoneWrapper;
