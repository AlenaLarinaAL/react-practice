import { useParams } from "react-router-dom";

const Subbreads = () => {
  const { dogId } = useParams();

  return <div>Subbreads: {dogId}</div>;
};

export default Subbreads;
