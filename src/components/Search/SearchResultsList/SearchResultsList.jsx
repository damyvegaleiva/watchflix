import { useParams } from "react-router-dom";
import SearchItem from "../SearchItem/SearchItem";

const SearchResultsList = ({ movies, hasMovies }) => {
  const { optionId } = useParams();

  return hasMovies ? (
    <div>
      <ul className="gap-1 px-5 w-full m-auto text-white lg:gap-1.5 sm:flex sm:flex-row sm:flex-wrap justify-between">
        {movies.map((movie) => (
          <SearchItem key={movie.id} {...movie} optionId={optionId} />
        ))}
      </ul>
    </div>
  ) : (
    <p className="text-center text-white">No results found.</p>
  );
};

export default SearchResultsList;
