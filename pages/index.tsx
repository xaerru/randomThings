import Head from "next/head";
import { Card } from "../components/Card";

export default (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-green-200 h-screen">
        <div className="text-center text-7xl font-mono font-semibold p-20">
          Click on what you want to see.
        </div>
        <div className="flex justify-center space-x-8 cursor-pointer">
          <div>
            <Card text="User Profiles" href="/users" />
          </div>
        </div>
      </div>
    </>
  );
};
