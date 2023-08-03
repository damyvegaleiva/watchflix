export const TrailerAdapter = (data) => {
  return (
    data.results.find((video) => video.name === "Official Trailer") ||
    data.results.find((video) => video.name === "Trailer")
  );
};
