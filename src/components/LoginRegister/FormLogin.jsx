import SuccessfulContainer from "../../containers/SuccessfulContainer/SuccessfulContainer";
import FormInput from "./FormInput";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormEyeIcon from "./FormEyeIcon";
import Button from "../Button/Button";

const FormLogin = ({
  handleChange,
  handleLogin,
  handleGoogle,
  errors,
  passwordRef,
  userLogin,
  isSuccessful,
}) => {
  if (isSuccessful)
    return <SuccessfulContainer title={"Logging you in... ✅"} />;

  return (
    <>
      <h2 className="text-[1.5rem] sm:text-[1.75rem] font-extrabold text-center text-red-600 underline decoration-white decoration-2 mb-5">
        LOGIN
      </h2>

      {errors.requests && (
        <p className="text-sm text-red-400">{errors.requests}</p>
      )}

      <form
        className="flex flex-col items-center justify-center gap-10 mx-auto rounded-xl "
        onSubmit={(e) => handleLogin(e)}
      >
        <FormInput
          type={"email"}
          name={"email"}
          placeHolder={"Email"}
          value={userLogin.email}
          handleChange={handleChange}
          errors={errors.email}
          iconInput={
            <FaUserAlt className="absolute text-black top-3.5 right-4" />
          }
        />

        <FormInput
          type={"password"}
          name={"password"}
          reference={passwordRef}
          placeHolder={"Password"}
          value={userLogin.password}
          handleChange={handleChange}
          errors={errors.password}
          iconInput={<FormEyeIcon value={passwordRef} />}
        />

        <Button title={"SIGN IN"} />

        <p className="-m-5 text-white">OR</p>

        <Button title={"SIGN WITH GOOGLE IN"} handleSubmit={handleGoogle} />

        <p className="text-sm text-center text-white sm:text-lg w-2/2">
          Don&apos;t have an account?{" "}
        </p>
        <Link
          to={"/register"}
          className="-mt-2 text-sm text-white sm:text-lg hover:underline"
        >
          REGISTER
        </Link>
      </form>
    </>
  );
};

export default FormLogin;
