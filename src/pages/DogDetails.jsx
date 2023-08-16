import { Suspense, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/dogs");
  const { dogId } = useParams();

  return (
    <>
      <h1>{dogId}</h1>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <ul>
        <li>
          <Link to="subbreads">Subbreads</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
