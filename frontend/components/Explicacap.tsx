import Image from 'next/image';
import styles from '../styles/Explicacao.module.css';

export default function Explicacao(){
    return (
      <div className={styles.explicacao}>
        <Image src="/privacidade.png" width={256} height={256} />
        <ul>
        <h3>Vantagens</h3>
          <li>Encurte links grandes</li>
          <li>Possibilidade de criar muitos links e compartilhar</li>
          <li>Seus links estao guardados com seguranca</li>
          
        </ul>
      </div>
    );
}