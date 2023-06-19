import TvMoviesItem from "../TvMoviesItem/TvMoviesItem";

const TvMoviesList = ({ movies }) => {
  return (
    <div>
      <ul className="gap-1 px-5 w-full m-auto text-white lg:gap-1.5 sm:flex sm:flex-row sm:flex-wrap justify-between overflow-scroll">
        {movies.map((movie) => (
          <TvMoviesItem key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default TvMoviesList;
