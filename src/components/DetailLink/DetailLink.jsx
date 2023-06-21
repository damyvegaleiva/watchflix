import { Link } from "react-router-dom";

const DetailLink = ({ url, title }) => {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      {title}
    </Link>
  );
};

export default DetailLink;
