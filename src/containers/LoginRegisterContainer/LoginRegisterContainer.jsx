const LoginRegisterContainer = ({ FormContainer }) => {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <img
        src="./images/login-bg.jpg"
        alt=""
        className="absolute block object-cover w-screen h-screen opacity-60 -z-10"
      />
      <section className=" mx-2 lg:w-[800px] md:h-[800px] rounded-md border py-5 flex gap-5 items-center justify-center flex-col backdrop-blur-sm bg-black/60">
        <img src="/images/watchflix.png" alt="Logo" className="" />
        <p className="mb-10 -mt-5 text-xs text-center text-white">
          Where the movies are
        </p>

        {FormContainer}
      </section>
    </main>
  );
};

export default LoginRegisterContainer;
