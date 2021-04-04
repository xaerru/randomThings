import Head from "next/head";
import { Card } from "../components/Card";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-green-200 flex flex-wrap justify-center items-center h-screen space-x-20">
        <Card text="Random Users" href="/users" />
      </div>
    </>
  );
}
