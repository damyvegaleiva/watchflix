import { TrailerAdapter } from "../../adapters/TrailerAdapter";
import { YOUTUBE_URL } from "../../config/config";

const TrailerContainer = ({ videos }) => {
  const trailer = TrailerAdapter(videos);

  if (!trailer) return null;

  return (
    <iframe
      allow="fullscreen"
      className="h-auto m-auto mt-10 aspect-video lg:h-96 md:h-64 sm:h-64 min-[450px]:h-52"
      src={YOUTUBE_URL + trailer.key}
    ></iframe>
  );
};

export default TrailerContainer;
