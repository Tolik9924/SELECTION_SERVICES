import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const NAVBAR_ITEMS = [
  {
    id: "WARDROBE",
    href: "#WARDROBE",
    title: "РОЗБІР ГАРДЕРОБА",
    active: false,
  },
  {
    id: "LINES",
    href: "#LINES",
    title: "РОЗБІР ЛІНІЙ ЗОВНІШНОСТІ",
    active: false,
  },
  {
    id: "SHOPPING",
    href: "#SHOPPING",
    title: "ШОПІНГ СУПРОВІД",
    active: false,
  },
  {
    id: "CAPSULE_WARDROBE",
    href: "#CAPSULE_WARDROBE",
    title: "КАПСУЛЬНИЙ ГАРДЕРОБ",
    active: false,
  },
  {
    id: "KEY_WARDROBE",
    href: "#KEY_WARDROBE",
    title: "ГАРДЕРОБ ПІД КЛЮЧ",
    active: false,
  },
];

export const Navbar = ({
  isShow,
  activeId,
}: {
  isShow: boolean;
  activeId: string;
}) => {
  const [navbarItems, setNavbarItems] = useState(NAVBAR_ITEMS);

  useEffect(() => {
    handleActiveItemMenu(activeId);
  }, [activeId]);

  const handleActiveItemMenu = (id: string) => {
    const result = navbarItems.map((item) => {
      if (item.id === id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setNavbarItems(result);
  };

  return (
    <nav className={isShow ? styles.navbar : styles.hide}>
      {navbarItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={!item.active ? styles.link : styles.linkActive}
          onClick={() => handleActiveItemMenu(item.id)}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};
