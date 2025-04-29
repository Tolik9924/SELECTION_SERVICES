import { Image } from "../Image/Image";
import img10 from "../../assets/10_img.png";

import styles from "./consult.module.css";

export const Consult = () => {
  return (
    <div className={styles.consultContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.infoContainer}>
        <div className={styles.freeInfo}>
          <p className={styles.explain}>
            Якщо ви вагаєтеся, з чого почати, пропоную{" "}
            <span className={styles.importantInfo}>
              безкоштовну 30-хвилинну консультацію
            </span>
            . Ми розглянемо ваші стильові запити, обговоримо гардеробні питання
            та підберемо оптимальний формат співпраці.
          </p>
          <p className={styles.title}>ЗАПИС НА КОНСУЛЬТАЦІЮ</p>
        </div>
        <p className={styles.mobilePhone}>
          ТЕЛЕФОН: <span className={styles.number}>+ 380 68 07 11 707</span>
        </p>
      </div>
      <Image className={styles.image} src={img10} alt="img10" />
    </div>
  );
};
