const LoginRegisterContainer = ({ FormContainer }) => {
  return (
    <main className="flex items-center justify-center h-screen">
      <img
        src="./images/login-bg.jpg"
        alt=""
        className="absolute block object-cover w-screen h-screen opacity-60 -z-10"
      />

      <section className="flex mx-2 lg:w-[800px] md:h-[800px] rounded-md border py-4 px-4 items-center justify-center flex-col backdrop-blur-sm bg-black/60">
        <img src="/images/watchflix.png" alt="Logo" />
        <p className="mb-6 text-xs text-center text-white">
          Where the movies are
        </p>

        {FormContainer}
      </section>
    </main>
  );
};

export default LoginRegisterContainer;
