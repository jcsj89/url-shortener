import { useState } from "react";
import styles from "../styles/Form.module.css";
import api from "../services/api";

export default function Form(props) {
  const [url, setUrl] = useState("");
  const [surl, setSurl] = useState('');  
    
  /*
    Funcao que cria a url curta no backend
  */
  const createUrl = (e) => {
    e.preventDefault();

    api
      .post("/", {
        long: url,
      })
      .then((resp) => {
          setSurl(resp.data.short);
          props.url(resp.data.short);          
        })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.form}>
      <h2>Digite ou cole sua URL para ser encurtada</h2>
      <div>
        <form>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={styles.input}
            type="text"
          />
          <button onClick={createUrl} className={styles.botao}>
            Encurtar URL
          </button>
        </form>
      </div>
      <p>
        As funcoes de encurtar a URL sao de memorizar com mais facilidade a url,
        mais simples de guardar ou compartilhar o link para outras pessoas.
      </p>
    </div>
  )

  
}
