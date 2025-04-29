import img1 from "../../assets/1_img.png";
import { Image } from "../Image/Image";

import styles from "./selectionService.module.css";

export const SelectionService = () => {
  return (
    <div className={styles.selectionService}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>СЕЛЕКЦІЯ ПОСЛУГ</div>
        <div className={styles.subtitle}>
          ПЕРСОНАЛЬНОЇ СТИЛІСТКИ КРІСТІНИ ДУТЧАК
        </div>
      </div>
      <div className={styles.overlay}></div>
      <Image className={styles.image} src={img1} alt="img1" />
    </div>
  );
};
