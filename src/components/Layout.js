import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../redux/myValue/slice";

// const Layout = () => {
//   const dispatch = useDispatch();
//   const value = useSelector((state) => state.myValue);
//   return (
//     <>
//       {value}
//       <button
//         className="btn btn-outline-primary"
//         type="button"
//         onClick={() => {
//           dispatch(increment(1));
//         }}
//       >
//         increment
//       </button>
//       <button
//         className="btn btn-outline-primary"
//         type="button"
//         onClick={() => {
//           dispatch(decrement(1));
//         }}
//       >
//         decrement
//       </button>
//     </>
//   );
// };

// export default Layout;
