const Button = ({ title, handleSubmit }) => {
  return (
    <button
      className="py-2 text-xs text-white transition duration-300 ease-in-out border w-36 lg:text-md lg:w-2/3 hover:border-red-600 hover:text-red-600 rounded-xl hover:bg-white"
      type="submit"
      onClick={(e) => (handleSubmit ? handleSubmit(e) : null)}
    >
      {title}
    </button>
  );
};

export default Button;
