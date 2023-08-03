import SuccessfulContainer from "../../../containers/SuccessfulContainer/SuccessfulContainer";
import FormInput from "../FormInput/FormInput";
import { FaUserAlt } from "react-icons/fa";
import FormEyeIcon from "../FormEyeIcon/FormEyeIcon";
import { Link } from "react-router-dom";

const FormLogin = ({
  handleChange,
  handleLogin,
  handleGoogle,
  errors,
  passwordRef,
  userLogin,
  isSuccessful,
}) => {
  return isSuccessful ? (
    <SuccessfulContainer title={"Logging you in... ✔️"} />
  ) : (
    <>
      <h2 className="text-[1.75rem] font-extrabold text-center text-red-600 underline decoration-white decoration-2 mb-5">
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

        <button
          className="w-full px-5 py-2 text-white transition duration-300 ease-in-out border hover:border-red-600 hover:text-red-600 rounded-xl hover:bg-white"
          type="submit"
        >
          SIGN IN
        </button>
        <p className="-m-5 text-white">OR</p>
        <button
          className="w-full px-5 py-2 text-white transition duration-300 ease-in-out border hover:border-red-600 hover:text-red-600 rounded-xl hover:bg-white"
          type="submit"
          onClick={(e) => handleGoogle(e)}
        >
          SIGN IN WITH GOOGLE
        </button>
        <p className="text-white">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="hover:underline">
            REGISTER
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormLogin;