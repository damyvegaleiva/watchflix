import { ProvidersAdapter } from "../../adapters/ProvidersAdapter";
import ProvidersList from "../../components/Providers/ProvidersList";

const ProvidersContainer = ({ providers, selection }) => {
  const providersResults = ProvidersAdapter(providers);

  return (
    <div className="flex flex-col items-center justify-center w-3/4 mx-auto mt-10 gap-14 mb-14">
      <ProvidersList
        providers={providersResults.flatrate}
        title={"Streaming on:"}
        text={"Not available on any streaming platforms at the moment."}
      />

      {selection !== "tv" && (
        <ProvidersList
          providers={providersResults.buy}
          title={"Available to buy/rent on:"}
          text={
            "Not available to buy/rent on any streaming platforms at the moment. "
          }
        />
      )}
    </div>
  );
};

export default ProvidersContainer;
