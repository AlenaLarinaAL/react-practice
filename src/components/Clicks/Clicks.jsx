import { useDispatch, useSelector } from "react-redux";
import css from "./Clicks.module.css";
import { update } from "../../redux/clicksSlice";

export const Clicks = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector((state) => state.clicks.value);

  return (
    <>
      <div>
        <h1>Number of clicks: {numberOfClicks}</h1>
        <button
          type="button"
          className={css.clicksBtn}
          onClick={() => dispatch(update(5))}
        >
          Add 5 clicks
        </button>
        <button
          type="button"
          className={css.clicksBtn}
          onClick={() => dispatch(update(10))}
        >
          Add 10 clicks
        </button>
        <button
          type="button"
          className={css.clicksBtn}
          onClick={() => dispatch(update(20))}
        >
          Add 20 clicks
        </button>
      </div>
    </>
  );
};
