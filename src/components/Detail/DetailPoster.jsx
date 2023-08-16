import { IMG_URL } from "../../config/config";

const DetailPoster = ({ title, poster }) => {
  return (
    <>
      <h2 className="my-3 text-2xl text-center text-white">{title}</h2>
      <img
        src={IMG_URL + poster}
        alt={title}
        className="w-3/4 mx-auto mb-3 border rounded-md sm:w-3/5 md:w-2/5 xl:w-1/5 lg:w-2/5 lg:mx-auto lg:my-5"
      />
    </>
  );
};

export default DetailPoster;
