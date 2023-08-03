const FormInput = ({
  type,
  name,
  reference,
  value,
  handleChange,
  placeHolder,
  errors,
  iconInput,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2">
      <input
        type={type}
        name={name}
        ref={reference}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => handleChange(e)}
        className={
          "py-2 pl-5 pr-10 border-2 focus:outline-none focus:border-red-600 rounded-2xl w-96 placeholder:italic " +
          (errors && "text-red-600")
        }
        required
      />

      {iconInput}

      <p className="self-start pl-3 text-xs text-red-400">{errors}</p>
    </div>
  );
};

export default FormInput;
