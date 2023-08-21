const Button = ({ title, handleSubmit }) => {
  return (
    <button
      className="py-2 text-xs text-white transition duration-300 ease-in-out border w-36 lg:text-md lg:w-2/3 hover:border-red-600 rounded-xl hover:bg-red-600"
      type="submit"
      onClick={(e) => handleSubmit && handleSubmit(e)}
    >
      {title}
    </button>
  );
};

export default Button;
