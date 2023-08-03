const LoginRegisterContainer = ({ FormContainer }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <img
        src="./images/login-bg.jpg"
        alt=""
        className="absolute object-cover w-full h-full -z-10"
      />

      <div className="w-[80%] lg:w-[800px] md:h-[800px] rounded-md border  flex gap-5 items-center justify-center flex-col backdrop-blur-sm bg-black/60">
        <img src="/images/watchflix.png" alt="Logo" />
        <p className="mb-10 -mt-5 text-xs text-center text-white">
          Where the movies are
        </p>

        {FormContainer}
      </div>
    </div>
  );
};

export default LoginRegisterContainer;
