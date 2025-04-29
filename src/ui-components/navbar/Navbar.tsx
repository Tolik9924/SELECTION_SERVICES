import styles from "./navbar.module.css";

export const Navbar = ({ isShow }: { isShow: boolean }) => {
  return (
    <nav className={isShow ? styles.navbar : styles.hide}>
      <a href="#WARDROBE" className={styles.link}>
        WARDROBE
      </a>
      <a href="#LINES" className={styles.link}>
        BEAUTY LINES
      </a>
      <a href="#SHOPPING" className={styles.link}>
        SHOPPING
      </a>
      <a href="#CAPSULE_WARDROBE" className={styles.link}>
        CAPSULE WARDROBE
      </a>
      <a href="#KEY_WARDROBE" className={styles.link}>
        KEY WARDROBE
      </a>
    </nav>
  );
};
