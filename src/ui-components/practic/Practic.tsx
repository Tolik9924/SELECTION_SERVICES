import { Image } from "../Image/Image";
import img2 from "../../assets/2_img.png";

import styles from "./practic.module.css";

export const Practic = () => {
  return (
    <div className={styles.practicContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.name}>Крістіна Дутчак</p>
          <p className={styles.profession}>ПРАКТИКУЮЧА ПЕРСОНАЛЬНА СТИЛІСТКА</p>
        </div>
        <Image className={styles.image} src={img2} alt="im2" />
        <div className={styles.explanationsContainer}>
          <ul className={styles.explainList}>
            <li className={styles.explainItem}>
              Створюю образи, що підкреслюють вашу індивідуальність
            </li>
            <li className={styles.explainItem}>
              Допомагаю знайти баланс між стилем і комфортом
            </li>
            <li className={styles.explainItem}>
              Підбираю одяг, що відображає ваш спосіб життя
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
