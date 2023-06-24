import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MOVIE_SEARCH_URL } from "../../config/config";
import TvMoviesList from "../TvMoviesList/TvMoviesList";
import { getModifiedData } from "../../utils/APIFunctions";

const TvMoviesListContainer = () => {
  const { id, optionId } = useParams();
  const { data } = useFetch(MOVIE_SEARCH_URL(optionId, id), getModifiedData);
  const hasMovies = data.length > 1;

  return (
    <main className="mt-10">
      <h2 className="mb-10 text-2xl text-center text-white">Search results:</h2>
      {hasMovies ? (
        <TvMoviesList movies={data} />
      ) : (
        <p className="text-center text-white">No results found.</p>
      )}
    </main>
  );
};

export default TvMoviesListContainer;
