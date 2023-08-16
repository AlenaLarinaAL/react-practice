import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import Layout from "./Layout";

// const MyComponent = lazy(() => import("path/to/MyComponent"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreads" element={<Subbreads />} />
            <Route path="gallery" element={<Gallery />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
