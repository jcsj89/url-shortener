import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer"
import Form from "../components/Form";

import Logo from "../components/Logo";
import Resposta from "../components/Resposta";
import styles from '../styles/Home.module.css';

export default function Home() {
  const [urls, setUrls] = useState('');

  const url = (url) => { setUrls(url) };

  const renderResp = () => {
    if (urls) {
      return (
        <Card>
          <Resposta url={urls} />
        </Card>
      )
    }
  }


  return (
    <>
      <Head>
        <title>Encurtador</title>
      </Head>

      <div className={styles.container}>
        <Logo />

        <Card>
          <Form url={url} />
        </Card>

        {/* Card da resposta com a URL curta */}
        {renderResp()}

      </div>
      <Footer />

    </>
  );
}
