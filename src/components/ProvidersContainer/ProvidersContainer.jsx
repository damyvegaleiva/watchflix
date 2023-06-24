import { IMG_URL } from "../../config/config";
import { getProviders } from "../../utils/APIFunctions";

const ProvidersContainer = ({ providers }) => {
  const providersResults = getProviders(providers);

  return (
    <div className="w-3/4 mx-auto mt-10 mb-14">
      <h2 className="mb-2 tracking-wide underline decoration lg:text-lg ">
        Available on:
      </h2>
      {providersResults?.length > 0 ? (
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          {providersResults?.map((provider) => (
            <img
              key={provider.provider_id}
              src={IMG_URL + provider.logo_path}
              className="w-10 mx-2 rounded-xl"
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
