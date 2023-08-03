export const ProvidersAdapter = (data) => {
  if (!data.results.US) return [];

  if (data.results.US.link.includes("tv")) return data.results.US.flatrate;

  return data.results.US.buy;
};
