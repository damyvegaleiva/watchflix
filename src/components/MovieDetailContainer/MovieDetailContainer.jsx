import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const MovieDetailContainer = () => {
  const { movieId } = useParams();

  const { data } = useFetch(`i=${movieId}`);

  return (
    <div>
      <h3 className="my-3 text-2xl text-center">{data.Titleitle}</h3>
      <img src={data.Poster} alt={data.Title} className="mb-3 rounded-md" />
      <p className="text-xl">{data.Year}</p>
      <p>{data.Plot}</p>
    </div>
  );
};

export default MovieDetailContainer;
