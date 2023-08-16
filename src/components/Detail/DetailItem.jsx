import DetailPoster from "./DetailPoster";
import DetailLinkContainer from "./DetailLinkContainer";
import DetailParagraph from "./DetailParagraph";
import TrailerContainer from "../../containers/TrailerContainer/TrailerContainer";
import ErrorBoundary from "../../utils/errorBoundary";
import ProvidersContainer from "../../containers/ProvidersContainer/ProvidersContainer";
import RecommendationsContainer from "../../containers/RecommendationsContainer/RecommendationsContainer";

const DetailItem = ({
  title,
  poster,
  overview,
  homepage,
  imdb_id,
  videos,
  ["watch/providers"]: providers,
  recommendations,
  selection,
}) => {
  return (
    <article className="-mt-5 text-center text-white ">
      <DetailPoster title={title} poster={poster} />

      <DetailLinkContainer homepage={homepage} imdb_id={imdb_id} />

      <DetailParagraph overview={overview} />

      <TrailerContainer videos={videos} />

      <ErrorBoundary fallback="[Sorry an unexpected error has ocurred.]">
        <ProvidersContainer providers={providers} selection={selection} />
      </ErrorBoundary>

      <RecommendationsContainer recommendations={recommendations} />
    </article>
  );
};

export default DetailItem;
