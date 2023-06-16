import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../config/config";

const MoviesItem = ({ id, title, poster }) => {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col items-center justify-center w-5/6 px-5 mx-auto transition duration-300 bg-black border rounded-md mb-7 sm:w-1/2 md:max-w-lg lg:w-2/5 md:hover:cursor-pointer md:hover:scale-105 lg:border-transparent lg:grayscale-75 lg:hover:grayscale-0 lg:hover:border-white xl:w-30 2xl:w-50 "
      onClick={() => navigate(`/movie/${id}`)}
    >
      <h3 className="my-3 text-2xl text-center">{title}</h3>
      <img src={IMG_URL + poster} alt={title} className="mb-3 rounded-md" />

      <button
        onClick={() => navigate(`/movie/${id}`)}
        className="px-5 my-5 border rounded hover:bg-white hover:text-neutral-950"
      >
        View More
      </button>
    </li>
  );
};

export default MoviesItem;
