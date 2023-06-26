import { YOUTUBE_URL } from "../../config/config";
import { getTrailer } from "../../utils/APIFunctions";

const TrailerContainer = ({ videos }) => {
  const trailer = getTrailer(videos);

  if (!trailer) return <h2 className="mt-10">No trailer available.</h2>;

  return (
    <iframe
      allow="fullscreen"
      className="h-auto m-auto mt-10 aspect-video lg:h-96 md:h-64 sm:h-64 min-[450px]:h-52"
      src={YOUTUBE_URL + trailer.key}
    ></iframe>
  );
};

export default TrailerContainer;
