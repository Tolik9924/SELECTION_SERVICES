import { Image } from "../Image/Image";
import img3 from "../../assets/3_img.jpeg";

import styles from "./modeton.module.css";

export const Modeton = () => {
  return (
    <div className={styles.modetonContainer}>
      <div className={styles.explanationContainer}>
        <p className={styles.explanation}>
          Робота над власним стилем зі мною – це вибір професіоналізму та
          експертного підходу. Я дипломована випускниця школи стилю{" "}
          <span className={styles.modeton}>MODETON</span>, і для мене
          найважливіше – це високий рівень кваліфікації та увага до деталей
        </p>
        <p className={styles.explanation}>
          Моє головне завдання — допомогти вам знайти ідеальний баланс між
          комфортом, модою та вашою індивідуальністю. Кожен клієнт для мене — це
          унікальний проєкт, де я застосовую експертний підхід, орієнтуючись на
          ваші потреби та стиль життя
        </p>
      </div>
      <Image className={styles.image} src={img3} alt="img3" />
    </div>
  );
};
