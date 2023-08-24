import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice/userSlice";

export const UserMenu = () => {
  const login = useSelector((state) => state.user.login);
  const dispatch = useDispatch();

  return (
    <>
      <div className="btn btn-outline-success me-2">{login}</div>
      <button
        type="button"
        className="btn btn-outline-success me-2"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </>
  );
};
