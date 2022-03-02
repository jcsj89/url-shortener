import Image from "next/image";
import styles from "../styles/Logo.module.css";


export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image className={styles.img} src="/g33.png" width={100} height={100} alt='Logo'/>
      <span className={styles.title}>Url Shortener</span>
    </div>
  );
}
