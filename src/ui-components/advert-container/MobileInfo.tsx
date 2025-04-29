import styles from "./mobileInfo.module.css";

export const MobileInfo = ({
  whatIs,
  happenList,
  getList,
}: {
  whatIs: string[];
  happenList: string[];
  getList: string[];
}) => {
  return (
    <div className={styles.fullInfo}>
      <div className={styles.whatIs}>
        <p className={styles.titleFullInfo}>ЩО ЦЕ?</p>
        {whatIs.map((item) => (
          <p key={item} className={styles.whatIfInfo}>
            {item}
          </p>
        ))}
      </div>
      <div className={styles.whatIs}>
        <p className={styles.titleFullInfo}>ЯК ВІДБУВАЄТЬСЯ?</p>
        <ul className={styles.list}>
          {happenList.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.whatIs}>
        <p className={styles.titleFullInfo}>ЩО ВИ ОТРИМАЄТЕ?</p>
        <ul className={styles.list}>
          {getList.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
