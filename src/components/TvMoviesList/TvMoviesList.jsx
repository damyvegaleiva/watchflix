import { useParams } from "react-router-dom";
import TvMoviesItem from "../TvMoviesItem/TvMoviesItem";

const TvMoviesList = ({ movies }) => {
  const { optionId } = useParams();

  return (
    <div>
      <ul className="gap-1 px-5 w-full m-auto text-white lg:gap-1.5 sm:flex sm:flex-row sm:flex-wrap justify-between overflow-scroll">
        {movies.map((movie) => (
          <TvMoviesItem key={movie.id} {...movie} optionId={optionId} />
        ))}
      </ul>
    </div>
  );
};

export default TvMoviesList;
