import Head from "next/head";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon clone</title>
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
