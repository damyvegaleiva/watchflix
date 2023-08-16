const HeaderFormOption = ({ handleCheck }) => {
  return (
    <div>
      <label className="pr-3 text-sm text-white sm:text-base">
        <input type="checkbox" name="movie" onChange={(e) => handleCheck(e)} />
        Movie
      </label>

      <label className="text-sm text-white sm:text-base">
        <input type="checkbox" name="tv" onChange={(e) => handleCheck(e)} />
        TV Show
      </label>
    </div>
  );
};

export default HeaderFormOption;
