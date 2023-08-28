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
          to="/contacts"
          className={styles.link}
          // activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>

        <NavLink
          to="/contacts/create"
          className={styles.link}
          // activeClassName={styles.activeLink}
        >
          NewContact
        </NavLink>
      </nav>
    </>
  );
}
