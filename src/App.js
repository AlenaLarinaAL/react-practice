import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
// import Books from "./pages/Books/Books";
import HomeView from "./views/HomeView";
// import BooksView from "./views/BooksView";
// import BookDetailsView from "./views/BookDetailsView";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<HomeView />} />
          {/* <Route path="books/:slug" element={<BookDetailsView />} /> */}
        </Route>
      </Routes>
    </>
  );
};
