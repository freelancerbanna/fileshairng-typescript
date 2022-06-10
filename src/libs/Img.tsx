import React, { FunctionComponent } from "react";
import Image from "next/image";

const Img: FunctionComponent<{ src: any }> = ({ src }) => {
  return <Image src={src} alt="fake file sharing" layout="fill" />;
};

export default Img;
