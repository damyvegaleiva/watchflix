import { IMG_URL } from "../../config/config";
import { getProviders } from "../../utils/APIFunctions";

const ProvidersContainer = ({ providers }) => {
  const providersResults = getProviders(providers);

  return (
    <div className="mt-10 mb-5 ">
      <h2 className="mb-2 tracking-wide underline decoration lg:text-lg ">
        Available on:
      </h2>
      {providersResults?.length > 0 ? (
        <div className="flex flex-row items-center justify-center">
          {providersResults?.map((provider) => (
            <img
              key={provider.provider_id}
              src={IMG_URL + provider.logo_path}
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
