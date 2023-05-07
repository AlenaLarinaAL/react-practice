import PropTypes from "prop-types";
import defaultImage from "./default.jpg";

// стрілочна
const Painting = ({
  imageUrl = defaultImage,
  title,
  author,
  profileUrl,
  price,
  quantity,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price}</p>
      <p>Aviliable: {quantity < 10 ? "running out" : "in stock"}</p>
      <button type="button">Add to basket</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;

// звичайна функція
// export default function Painting(props) {
//   const { imageUrl = defaultImage, title, author, profileUrl, price } = props;
//   return (
//     <div>
//       <img src={imageUrl} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Author: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Price: {price}</p>
//       <p>Aviliable: running out or in stock</p>
//       <button type="button">Add to basket</button>
//     </div>
//   );
// }
