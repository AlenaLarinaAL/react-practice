import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import { LoginPage, DashBoardPage } from "pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
