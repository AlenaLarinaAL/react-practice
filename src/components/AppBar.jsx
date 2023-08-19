import { Link } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";
export const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <header>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <Link to="/login" className="btn btn-outline-success me-2">
            Log in
          </Link>
          {isLoggedIn && <UserMenu />}
        </nav>
      </header>
    </>
  );
};
