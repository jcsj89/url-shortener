import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer"
import Form from "../components/Form";
import Head from "../components/Head"
import Logo from "../components/Logo";
import styles from '../styles/Home.module.css';

export default function Home() {
  const [urls, setUrls] = useState('');
  
  const url = (url) => { setUrls(url) };  
  
function renderLink(){
  if(urls){
    return (
      <Card>
        <h1>
          <a href={`http://localhost:3333/${urls}`}>
            http://localhost:3333/{urls}
          </a>
        </h1>
      </Card>
    );
  }
}

  return (
    <>
      <Head />

      <div className={styles.container}>
        <Logo />

        <Card>
          <Form url={url} />
        </Card>

      {renderLink()}
       
      <Footer />
      </div>

    </>
  );
}
