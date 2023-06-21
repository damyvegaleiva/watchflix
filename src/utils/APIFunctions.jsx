export const getModifiedData = (data) => {
  if (data?.results) {
    return data.results.map(({ name, poster_path, ...rest }) => ({
      title: name,
      poster: poster_path,
      ...rest,
    }));
  }

  const { name, poster_path, ...rest } = data;

  return {
    title: name,
    poster: poster_path,
    ...rest,
  };
};

export const getProviders = (data) => {
  if (data.results.US.link.includes("tv")) {
    return data.results.US.flatrate;
  }

  return data.results.US.buy;
};

export const getTrailer = (data) => {
  return (
    data.results.find((video) => video.name === "Official Trailer") ||
    data.results.find((video) => video.name === "Trailer")
  );
};
