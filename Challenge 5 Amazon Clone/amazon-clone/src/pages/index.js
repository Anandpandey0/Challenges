import Head from "next/head";

import SearchHeader from "../components/SearchHeader";
import Header from "../components/header";
import ImageCarosuel from "../components/ImageCarosuel";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchHeader />
      <Header />
      <ImageCarosuel />
      <Explore />
    </div>
  );
}
