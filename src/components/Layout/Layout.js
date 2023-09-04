import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

export const Layout = () => {
  return (
    <>
      <header style={styles.header}>
        <AppBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
