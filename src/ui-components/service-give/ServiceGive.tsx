import img4 from "../../assets/4_img.png";
import { Image } from "../Image/Image";

import styles from "./serviceGive.module.css";

export const ServiceGive = () => {
  return (
    <div className={styles.serviceGiveContainer}>
      <div className={styles.overlay}></div>
      <p className={styles.titleDesktop}>ПОСЛУГИ, ЯКІ НАДАЮ</p>
      <p className={styles.titleMobile}>ПОСЛУГИ</p>
      <Image className={styles.image} src={img4} alt="img4" />
    </div>
  );
};
