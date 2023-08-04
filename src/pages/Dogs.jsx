import { Link } from "react-router-dom";

const Dogs = () => {
  return (
    <>
      <div>Dogs page 🐶</div>
      <div>
        {[
          "dog-1",
          "dog-2",
          "dog-3",
          "dog-4",
          "dog-5",
          "dog-6",
          "dog-7",
          "dog-8",
          "dog-9",
          "dog-10",
        ].map((dog) => (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        ))}
      </div>
    </>
  );
};
export default Dogs;
