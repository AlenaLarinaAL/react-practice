import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Dogs = () => {
  const [dogs, setDogs] = useState([
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
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get("dogId") ?? "";

  const filteredDogs = dogs.filter((dog) => dog.includes(dogId));

  const location = useLocation();

  const updateQueryString = (event) => {
    const dogIdValue = event.target.value;
    if (dogIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });
  };

  return (
    <>
      <div>
        <input type="text" value={dogId} onChange={updateQueryString} />

        <ul>
          {filteredDogs.map((dog) => {
            return (
              <li key={dog}>
                <Link to={`${dog}`} state={{ from: location }}>
                  {dog}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Dogs;
