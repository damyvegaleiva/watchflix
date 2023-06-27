import { IMDB_URL } from "../../../config/config";
import DetailLink from "../DetailLink/DetailLink";

const DetailLinkContainer = ({ homepage, imdb_id }) => {
  return (
    <>
      {homepage && <DetailLink url={homepage} title={"Official Website"} />}

      {imdb_id && <DetailLink url={IMDB_URL + imdb_id} title={"IMDb page"} />}
    </>
  );
};

export default DetailLinkContainer;
