import { YOUTUBE_URL } from "../../config/config";
import { getTrailer } from "../../utils/APIFunctions";

const TrailerContainer = ({ videos }) => {
  const trailer = getTrailer(videos);

  if (!trailer) return <h1>No trailer available.</h1>;

  return (
    <iframe
      allow="fullscreen"
      className="m-auto mb-24 aspect-video lg:h-96 md:h-64 sm:h-52"
      src={YOUTUBE_URL + trailer.key}
    ></iframe>
  );
};

export default TrailerContainer;
