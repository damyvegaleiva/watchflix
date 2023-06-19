import { Link } from "react-router-dom";
import { IMDB_URL, IMG_URL } from "../../config/config";
import MovieProvidersContainer from "../MovieProvidersContainer/MovieProvidersContainer";

const MovieDetail = ({ name, poster_path, overview, homepage, imdb_id }) => {
  return (
    <div className="mt-24 text-center text-white w">
      <h2 className="my-3 text-2xl text-center text-white">{name}</h2>
      <img
        src={IMG_URL + poster_path}
        alt={name}
        className="mx-auto mb-3 rounded-md"
      />
      <p>{overview}</p>
      <Link to={homepage} target="_blank" rel="noopener noreferrer">
        Official Website
      </Link>

      <Link to={IMDB_URL + imdb_id} target="_blank" rel="noopener noreferrer">
        {" "}
        IMDb page
      </Link>
      <MovieProvidersContainer />
    </div>
  );
};

export default MovieDetail;
