import Head from "next/head";

//
import DropzoneWrapper from "components/Dropzone";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fake share by Banna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DropzoneWrapper />
      </div>
    </>
  );
};

export default Home;