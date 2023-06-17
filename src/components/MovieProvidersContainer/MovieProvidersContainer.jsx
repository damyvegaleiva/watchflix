import { IMG_URL, MOVIE_WATCH_PROVIDER } from "../../config/config";
import useFetch from "../../hooks/useFetch";

const MovieProvidersContainer = ({ movieId }) => {
  const { useGetWatchProviders } = useFetch();
  const { data } = useGetWatchProviders(MOVIE_WATCH_PROVIDER(movieId));

  return (
    <div className="mt-10 mb-5 ">
      <h2 className="mb-2 underline decoration lg:text-lg">Available on:</h2>
      {data?.length > 0 ? (
        <div className="flex flex-row items-center justify-center">
          {data.map((movie) => (
            <img
              key={movie.provider_id}
              src={IMG_URL + movie.logo_path}
              className="w-10 mx-2 "
            />
          ))}
        </div>
      ) : (
        "Not available on any streaming platforms at the moment."
      )}
    </div>
  );
};

export default MovieProvidersContainer;
