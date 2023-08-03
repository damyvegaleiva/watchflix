import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import FormInput from "../FormInput/FormInput";
import FormEyeIcon from "../FormEyeIcon/FormEyeIcon";
import SuccessfulContainer from "../../../containers/SuccessfulContainer/SuccessfulContainer";

const FormRegister = ({
  userForm,
  errors,
  isSuccessful,
  passwordRef,
  verifyPasswordRef,
  handleChange,
  handleRegister,
}) => {
  return isSuccessful ? (
    <SuccessfulContainer
      title={"ACCOUNT CREATED SUCCESSFULLY ✔️"}
      text={"Logging you in and redirecting you to Home page..."}
    />
  ) : (
    <>
      <h2 className="text-[1.75rem] font-extrabold text-center text-red-600 underline decoration-white decoration-2 mb-5">
        CREATE ACCOUNT
      </h2>
      <form
        className="flex flex-col items-center justify-center gap-10 mx-auto rounded-xl "
        onSubmit={(e) => handleRegister(e)}
      >
        <FormInput
          type={"email"}
          name={"email"}
          placeHolder={"Email"}
          value={userForm.email}
          handleChange={handleChange}
          errors={errors.email}
          iconInput={
            <FaUserAlt className="absolute text-black top-3.5 right-4" />
          }
        />

        <FormInput
          type={"password"}
          name={"password"}
          placeHolder={"Password"}
          reference={passwordRef}
          value={userForm.password}
          handleChange={handleChange}
          errors={errors.password}
          iconInput={
            <FormEyeIcon
              className="absolute text-black top-3.5 right-4"
              value={passwordRef}
            />
          }
        />

        <FormInput
          type={"password"}
          name={"verifyPassword"}
          placeHolder={"Verify password"}
          reference={verifyPasswordRef}
          value={userForm.verifyPassword}
          handleChange={handleChange}
          errors={errors.verifyPassword}
          iconInput={
            <FormEyeIcon
              className="absolute text-black top-3.5 right-4"
              value={verifyPasswordRef}
            />
          }
        />

        <button
          className="w-full px-5 py-2 text-white transition duration-300 ease-in-out border hover:border-red-600 hover:text-red-600 rounded-xl hover:bg-white"
          type="submit"
        >
          SUBMIT
        </button>
        <p className="text-white">
          Already have an account?{" "}
          <Link to={"/"} className="hover:underline">
            SIGN IN
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormRegister;
