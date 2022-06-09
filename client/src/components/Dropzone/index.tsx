import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import ScaleLoader from "react-spinners/ScaleLoader";

//
import DropZone from "./DropZone";
import RenderZone from "./RenderZone";

const DropzoneWrapper = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [id, setId] = useState(null!);
  const [donwloadLink, setDownloadLink] = useState(null!);
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

        data && setFile("");
        data && setDownloadLink(data.downloadLink);
        data && setId(data.id);
      } catch (error: any) {
        Swal.fire({
          title: "Error!",
          text: error.response.data,
          icon: "error",
          confirmButtonText: "ok",
        });
      }
    }, 1000);
  };
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[10px] border-4 border-[#131332] shadow-2xl  flex-col">
      {loading ? (
        <ScaleLoader />
      ) : (
        <>
          <DropZone setFile={setFile} />
          {file && <RenderZone file={file} handleSubmit={handleSubmit} />}
        </>
      )}
    </div>
  );
};

export default DropzoneWrapper;
