import { IMG_URL } from "../../config/config";

const ProvidersList = ({ providers, title, text }) => {
  return (
    <div>
      <h2 className="mb-2 tracking-wide underline decoration lg:text-lg ">
        {title}
      </h2>
      {providers ? (
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          {providers.map((provider) => (
            <img
              key={provider.provider_id}
              src={IMG_URL + provider.logo_path}
              className="w-10 mx-2 rounded-xl"
            />
          ))}
        </div>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ProvidersList;
