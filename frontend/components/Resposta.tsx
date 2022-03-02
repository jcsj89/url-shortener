import Link from 'next/link';
import styles from '../styles/Resposta.module.css';

export default function Resposta(props){
            
    const link = `http://localhost:3333/${props.url}`;
    console.log(props.url)

    return props.url ? (
        <div className={styles.resposta}>
            <span>Novo link gerado com sucesso</span>
            <p>
                <Link href={link}>{link}</Link>
            </p>
        </div>
    ) : null
}
