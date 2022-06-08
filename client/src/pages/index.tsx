import Head from "next/head";

//
import { DropzoneWrapper } from "components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fake file sharing by Banna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DropzoneWrapper />
    </>
  );
};

export default Home;
