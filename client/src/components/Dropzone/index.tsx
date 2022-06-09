import axios from "axios";
import React, { FormEventHandler, useState } from "react";
import Swal from "sweetalert2";

//
import DropZone from "./DropZone";
import RenderZone from "./RenderZone";

const DropzoneWrapper = () => {
  const [file, setFile] = useState(null!);
  const [id, setId] = useState(null!);
  const [donwloadLink, setDownloadLink] = useState(null!);
  //
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("filesharing", file);

    try {
      const { data } = await axios({
        method: "POST",
        data: formData,
        url: "/upload/file",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      data &&
        Swal.fire({
          title: "Successfully uploaded",
          text: "Please a donwload link will be there copy and paste that to new tab from your browser",
          icon: "success",
          confirmButtonText: "Ok",
        });

      data && setFile(null);
      data && setDownloadLink(data.downloadLink);
      data && setId(data.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[10px] border-4 border-[#131332] shadow-2xl  flex-col">
      <DropZone setFile={setFile} />
      {file && <RenderZone file={file} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default DropzoneWrapper;
