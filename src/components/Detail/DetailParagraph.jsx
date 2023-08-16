const DetailParagraph = ({ overview }) => {
  return (
    <div className="mt-16 mb-20">
      <h2 className="pl-4 mx-auto -mb-2 text-lg border-l-4 lg:text-xl border-l-red-600 w-fit">
        STORYLINE
      </h2>
      <p className="w-3/4 mx-auto mt-10 text-sm sm:text-base lg:w-1/2">
        {overview}
      </p>
    </div>
  );
};

export default DetailParagraph;
