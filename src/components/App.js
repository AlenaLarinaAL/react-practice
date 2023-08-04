import { Routes, NavLink, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dogs from "../pages/Dogs";
import DogDetails from "../pages/DogDetails";

export const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Collection</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<DogDetails />} />
      </Routes>
    </>
  );
};
