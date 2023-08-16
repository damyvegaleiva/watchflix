export const ProvidersAdapter = (data) => {
  if (!data.results.US) return [];

  if (data.results.US.link.includes("tv"))
    return { flatrate: data.results.US.flatrate };

  return {
    buy: data.results.US.buy,
    flatrate: data.results.US.flatrate,
  };
};
