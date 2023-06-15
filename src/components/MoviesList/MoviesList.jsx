import MoviesItem from "../MoviesItem/MoviesItem";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul className="gap-1 px-5 w-full m-auto text-white lg:gap-1.5 sm:flex sm:flex-row sm:flex-wrap justify-between">
        {movies.map((movie) => (
          <MoviesItem key={movie.imdbID} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
