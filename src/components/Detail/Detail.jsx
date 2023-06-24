import { IMDB_URL, IMG_URL } from "../../config/config";
import ProvidersContainer from "../ProvidersContainer/ProvidersContainer";
import DetailLink from "../DetailLink/DetailLink";
import TrailerContainer from "../TrailerContainer/TrailerContainer";
import ErrorBoundary from "../../utils/errorBoundary";

const Detail = ({
  title,
  poster,
  overview,
  homepage,
  imdb_id,
  videos,
  ["watch/providers"]: providers,
}) => {
  return (
    <div className="-mt-5 text-center text-white ">
      <h2 className="my-3 text-2xl text-center text-white">{title}</h2>
      <img
        src={IMG_URL + poster}
        alt={title}
        className="w-3/4 mx-auto mb-3 border rounded-md sm:w-3/5 md:w-2/5 xl:w-1/5 lg:w-2/5 lg:mx-auto lg:my-5"
      />

      {homepage && <DetailLink url={homepage} title={"Official Website"} />}

      {imdb_id && <DetailLink url={IMDB_URL + imdb_id} title={"IMDb page"} />}

      <p className="w-3/4 mx-auto mt-5 lg:w-1/2">{overview}</p>

      <ErrorBoundary fallback="[Sorry an unexpected error has ocurred.]">
        <ProvidersContainer providers={providers} />
      </ErrorBoundary>
      <TrailerContainer videos={videos} />
    </div>
  );
};

export default Detail;
