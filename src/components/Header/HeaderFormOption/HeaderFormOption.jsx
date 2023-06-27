const HeaderFormOption = ({ handleCheck }) => {
  return (
    <div>
      <label className="pr-3 text-sm text-white sm:text-base">
        <input type="checkbox" name="movie" onClick={(e) => handleCheck(e)} />
        Movie
      </label>

      <label className="text-sm text-white sm:text-base">
        <input type="checkbox" name="tv" onClick={(e) => handleCheck(e)} />
        TV Show
      </label>
    </div>
  );
};

export default HeaderFormOption;
