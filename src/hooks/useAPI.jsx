export const findMovies = (data) => {
  return data.results?.map(({ poster_path, ...rest }) => ({
    poster: poster_path,
    ...rest,
  }));
};
