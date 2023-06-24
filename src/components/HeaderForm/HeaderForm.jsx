import HeaderFormOption from "../HeaderFormOption/HeaderFormOption";

const HeaderForm = ({ handleChange, handleSubmit, input, handleCheck }) => {
  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="flex flex-col items-center content-center gap-2 m-auto text-center"
    >
      <HeaderFormOption handleCheck={handleCheck} />
      <input
        type="search"
        value={input}
        placeholder="Avengers, Star Wars, etc..."
        onChange={handleChange}
        className="w-2/3 py-1 pl-4 mb-4 text-sm border-red-700 rounded outline-none sm:w-1/2 form-input sm:text-xl sm:max-w-md focus:border-2"
      />
      <button
        type="submit"
        className="w-1/3 py-1 text-white border rounded-md sm:w-1/5 sm:max-w-sm"
      >
        Find
      </button>
    </form>
  );
};

export default HeaderForm;
