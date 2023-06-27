import DetailPoster from "../DetailPoster/DetailPoster";
import DetailLinkContainer from "../DetailLinkContainer/DetailLinkContainer";
import TrailerContainer from "../../TrailerContainer/TrailerContainer";
import ProvidersContainer from "../../ProvidersContainer/ProvidersContainer";
import ErrorBoundary from "../../../utils/ErrorBoundary";
import RecommendationsContainer from "../../RecommendationsContainer/RecommendationsContainer";
import DetailParagraph from "../DetailParagraph/DetailParagraph";

const DetailItem = ({
  title,
  poster,
  overview,
  homepage,
  imdb_id,
  videos,
  ["watch/providers"]: providers,
  recommendations,
}) => {
  return (
    <article className="-mt-5 text-center text-white ">
      <DetailPoster title={title} poster={poster} />

      <DetailLinkContainer homepage={homepage} imdb_id={imdb_id} />

      <DetailParagraph overview={overview} />

      <TrailerContainer videos={videos} />

      <ErrorBoundary fallback="[Sorry an unexpected error has ocurred.]">
        <ProvidersContainer providers={providers} />
      </ErrorBoundary>

      <RecommendationsContainer recommendations={recommendations} />
    </article>
  );
};

export default DetailItem;
