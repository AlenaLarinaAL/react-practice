import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink
          exact
          to="/"
          className={styles.link}
          // activeclassName={styles.activeLink}
        >
          Главная
        </NavLink>

        <NavLink
          to="/books"
          className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Книги
        </NavLink>

        <NavLink
          to="/todos"
          className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Todo
        </NavLink>
      </nav>
    </>
  );
}
