import { Link, Outlet, useParams } from "react-router-dom";

const DogDetails = () => {
  const { dogId } = useParams();
  console.log(dogId);
  return (
    <>
      {dogId}
      <ul>
        <li>
          <Link to="subbreads">Subbreads</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
