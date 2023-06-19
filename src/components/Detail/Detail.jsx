import { Link } from "react-router-dom";
import { IMDB_URL, IMG_URL } from "../../config/config";
import ProvidersContainer from "../ProvidersContainer/ProvidersContainer";

const Detail = ({ title, name, poster_path, overview, homepage, imdb_id }) => {
  return (
    <div className="text-center text-white ">
      <h2 className="my-3 text-2xl text-center text-white">
        {name ? name : title}
      </h2>
      <img
        src={IMG_URL + poster_path}
        alt={name ? name : title}
        className="mx-auto mb-3 rounded-md"
      />
      <Link to={homepage} target="_blank" rel="noopener noreferrer">
        Official Website
      </Link>

      <Link to={IMDB_URL + imdb_id} target="_blank" rel="noopener noreferrer">
        IMDb page
      </Link>

      <p className="w-full mx-auto mt-5 lg:w-1/2">{overview}</p>

      <ProvidersContainer />
    </div>
  );
};

export default Detail;
