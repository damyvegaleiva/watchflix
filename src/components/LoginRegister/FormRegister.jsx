import SuccessfulContainer from "../../containers/SuccessfulContainer/SuccessfulContainer";
import FormInput from "./FormInput";
import { FaUserAlt } from "react-icons/fa";
import FormEyeIcon from "./FormEyeIcon";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const FormRegister = ({
  userForm,
  errors,
  isSuccessful,
  passwordRef,
  verifyPasswordRef,
  handleChange,
  handleRegister,
}) => {
  if (isSuccessful)
    return (
      <SuccessfulContainer
        title={"ACCOUNT CREATED SUCCESSFULLY ✅"}
        text={"Redirecting you to Home page..."}
      />
    );

  return (
    <>
      <h2 className="text-[1.5rem] sm:text-[1.75rem] font-extrabold text-center text-red-600 underline decoration-white decoration-2 mb-5">
        REGISTER
      </h2>
      <form
        className="flex flex-col items-center justify-center mx-auto gap-7 rounded-xl "
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

        <Button title={"SUBMIT"} />

        <p className="text-sm text-center text-white sm:text-lg w-2/2">
          Already have an account?
        </p>

        <Link
          to={"/"}
          className="-mt-2 text-sm text-white sm:text-lg hover:underline"
        >
          LOG IN
        </Link>
      </form>
    </>
  );
};

export default FormRegister;
