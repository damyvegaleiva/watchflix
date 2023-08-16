import { Link } from "react-router-dom";

const DetailLink = ({ url, title }) => {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="pr-4 underline"
    >
      {title}
    </Link>
  );
};

export default DetailLink;
