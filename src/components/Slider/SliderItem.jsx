import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../config/config";

const SliderItem = ({
  poster,
  id,
  title,
  tvMovieValue,
  difStyle,
  media_type,
}) => {
  const navigate = useNavigate();

  return (
    <img
      src={IMG_URL + poster}
      alt={title}
      onClick={() => navigate(`/${media_type || tvMovieValue}/${id}`)}
      className={`mx-0.5 h-44 md:h-80 rounded-md hover:cursor-pointer lg:h-96 lg:hover:scale-110 lg:hover:mx-4 transition-scale ease-in-out duration-100 ${difStyle}`}
    />
  );
};

export default SliderItem;
