import { useSelector } from "react-redux";

export const UserMenu = () => {
  const login = useSelector((state) => state.user.login);
  return (
    <>
      <div className="btn btn-outline-success me-2">{login}</div>
      <button type="button" className="btn btn-outline-success me-2">
        Log out
      </button>
    </>
  );
};
