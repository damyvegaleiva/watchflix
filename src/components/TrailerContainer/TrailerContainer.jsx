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

  if (!video) return <h1>No trailer available.</h1>;

  return (
    <iframe
      allow="fullscreen"
      className="m-auto mb-24 aspect-video lg:h-96 md:h-64 sm:h-52"
      src={YOUTUBE_URL + video.key}
    ></iframe>
  );
};

export default TrailerContainer;
