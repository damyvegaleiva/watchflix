const Button = ({ title, handleSubmit }) => {
  return (
    <button
      className="py-2 text-xs text-white transition duration-300 ease-in-out bg-red-600 md:bg-transparent md:border w-36 md:text-md md:w-2/3 hover:border-red-600 rounded-[1px]  md:rounded-xl hover:bg-red-600"
      type="submit"
      onClick={(e) => handleSubmit && handleSubmit(e)}
    >
      {title}
    </button>
  );
};

export default Button;
