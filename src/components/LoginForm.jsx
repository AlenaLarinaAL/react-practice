import { useDispatch } from "react-redux";
import { logIn } from "../redux/userSlice/userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(logIn(form.elements.login.value));
    form.reset();
  };
  return (
    <>
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
    </>
  );
};
