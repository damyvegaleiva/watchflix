import MoviesItem from "../MoviesItem/MoviesItem";

const MoviesList = ({ movies }) => {
  return (
    <div className="w-3/4 m-auto">
      <ul className="flex flex-row flex-wrap items-center justify-around w-full gap-5 m-auto text-white">
        {movies.map((movie) => (
          <MoviesItem key={movie.imdbID} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
