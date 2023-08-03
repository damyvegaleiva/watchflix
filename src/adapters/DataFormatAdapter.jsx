export const DataFormatAdapter = (data) => {
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
