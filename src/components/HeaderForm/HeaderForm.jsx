const HeaderForm = ({ handleChange, handleSubmit, input }) => {
  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="flex flex-col items-center content-center gap-2 m-auto text-center"
    >
      <input
        type="search"
        value={input}
        placeholder="Avengers, Star Wars, etc..."
        onChange={handleChange}
        className="w-1/2 py-2 pl-4 mb-4 text-base border-red-700 rounded outline-none form-input sm:text-xl sm:w-1/2 sm:max-w-md focus:border-2"
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
