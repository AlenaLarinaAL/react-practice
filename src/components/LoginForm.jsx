import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(logIn(form.elements.login.value));
    form.reset();
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      {!isLoggedIn && (
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-auto">
            <label className="visually-hidden">Password</label>
            <input
              type="text"
              name="login"
              className="form-control"
              id="inputPassword2"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Confirm identity
            </button>
          </div>
        </form>
      )}
    </>
  );
};
