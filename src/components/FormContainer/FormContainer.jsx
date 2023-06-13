import { useState } from "react";

const FormContainer = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="">
      <div className="py-5 my-10 bg-black">
        <img className="mx-auto " src={"./images/watchflix.png"} />
        <p className="text-xs text-center text-white">Where the movies are</p>
      </div>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="flex flex-col items-center content-center gap-2 m-auto text-center"
      >
        <input
          type="search"
          value={input}
          placeholder="Avengers, Star Wars and more..."
          onChange={handleChange}
          className="w-1/4 py-2 pl-4 rounded"
        />
        <button
          type="submit"
          className="w-2/12 px-4 py-1 text-xl text-white border rounded-md"
        >
          Find
        </button>
      </form>
    </header>
  );
};

export default FormContainer;
