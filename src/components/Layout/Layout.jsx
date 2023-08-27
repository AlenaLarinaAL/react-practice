import css from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";

export const Layout = () => {
  return (
    <>
      <Container>
        <header className={css.header}>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};
