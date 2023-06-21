import { useParams } from "react-router-dom";
import { IMG_URL, WATCH_PROVIDER } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import { getProviders } from "../../utils/APIFunctions";

const ProvidersContainer = () => {
  const params = useParams();
  const selection = window.location.pathname.split("/")[1];
  const { data } = useFetch(WATCH_PROVIDER(selection, params.id), getProviders);

  return (
    <div className="mt-10 mb-5 ">
      <h2 className="mb-2 tracking-wide underline decoration lg:text-lg ">
        Available on:
      </h2>
      {data?.length > 0 ? (
        <div className="flex flex-row items-center justify-center">
          {data.map((movie) => (
            <img
              key={movie.provider_id}
              src={IMG_URL + movie.logo_path}
              className="w-10 mx-2 "
            />
          ))}
        </div>
      ) : (
        "Not available on any streaming platforms at the moment."
      )}
    </div>
  );
};

export default ProvidersContainer;
