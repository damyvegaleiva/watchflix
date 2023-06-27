import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../../config/config";

const TvMoviesItem = ({ id, title, poster, media_type, optionId }) => {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col items-center justify-center w-5/6 px-5 mx-auto transition duration-300 bg-black border rounded-md mb-7 sm:w-1/2 md:max-w-lg lg:w-2/5 md:hover:cursor-pointer md:hover:scale-105 lg:border-transparent sm:grayscale-75 sm:hover:grayscale-0 lg:hover:border-white xl:w-30 2xl:w-50 "
      onClick={() => navigate(`/${media_type ? media_type : optionId}/${id}`)}
    >
      <h3 className="my-3 text-2xl text-center">{title}</h3>
      <img
        src={IMG_URL + poster}
        alt={title}
        className="mb-3 rounded-md lg:w-3/4"
      />

      <button
        onClick={() => navigate(`/${media_type}/${id}`)}
        className="px-5 my-5 border rounded hover:bg-white hover:text-neutral-950"
      >
        View More
      </button>
    </li>
  );
};

export default TvMoviesItem;
