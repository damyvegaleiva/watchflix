import { IMDB_URL, IMG_URL } from "../../config/config";
import ProvidersContainer from "../ProvidersContainer/ProvidersContainer";
import DetailLink from "../DetailLink/DetailLink";
import TrailerContainer from "../TrailerContainer/TrailerContainer";

const Detail = ({ title, poster, overview, homepage, imdb_id }) => {
  return (
    <div className="-mt-5 text-center text-white ">
      <h2 className="my-3 text-2xl text-center text-white">{title}</h2>
      <img
        src={IMG_URL + poster}
        alt={title}
        className="mx-auto my-5 mb-3 border rounded-md"
      />

      <DetailLink url={homepage} title={"Official Website"} />

      {imdb_id ? (
        <DetailLink url={IMDB_URL + imdb_id} title={"IMDb page"} />
      ) : (
        ""
      )}

      <p className="w-full mx-auto mt-5 lg:w-1/2">{overview}</p>

      <ProvidersContainer />
      <TrailerContainer />
    </div>
  );
};

export default Detail;
