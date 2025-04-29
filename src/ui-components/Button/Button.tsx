import { MouseEvent, ReactNode } from "react";
import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
