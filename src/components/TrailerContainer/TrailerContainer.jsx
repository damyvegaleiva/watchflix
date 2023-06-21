import { VIDEOS_URL, YOUTUBE_URL } from "../../config/config";
import { getTrailer } from "../../utils/APIFunctions";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const TrailerContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];

  const { data: video } = useFetch(
    VIDEOS_URL(selection, params.id),
    getTrailer
  );

  return (
    <iframe
      className="m-auto aspect-video h-96"
      key={video.id}
      src={YOUTUBE_URL + video.key}
    ></iframe>
  );
};

export default TrailerContainer;
