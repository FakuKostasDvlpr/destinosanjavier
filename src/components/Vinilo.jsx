import "../styles/index.css";

const Vinilo = ({ title, year, imageUrl, description, leftText, backgroundColor }) => {
  return (
    <section style={{ backgroundColor }} className="flex items-center justify-center min-h-screen">
      <div className="relative w-[520px] h-[440px] bg-transparent border border-gray-700 flex items-center justify-center rounded-lg">
        {/* Círculo grande */}
        <div className="absolute inset-0 m-auto w-[429px] border border-gray-700 h-[430px] bg-transparent rounded-full flex items-center justify-center">
          {/* Círculo interior */}
          <div className="absolute w-40 h-40 bg-transparent border border-[black] rounded-full flex items-center justify-center">
            {/* Imagen en el centro */}
            <img
              src={imageUrl}
              alt="Album Cover"
              className="w-[121px] h-[121px] object-cover rounded-[300px]"
            />
          </div>
        </div>
        {/* Texto encima */}
        <div className="absolute flex flex-col gap-16 text-center justify-between px-4">
          <div className="flex w-full max-w-[400px] mb-24">
            <h1 className="textVinilo text-6xl font-bold text-gray-500">{title}</h1>
          </div>
          <div className="flex justify-between items-center w-full px-1">
            <p className="text-xl font-light textCdVinilo self-center italic text-gray-400">{leftText}</p>
            <p className="text-xl font-light textCdVinilo self-center text-gray-400">{year}</p>
          </div>
          <div className="flex items-center justify-center mb-20">
            <p className="textVinilo text-4xl underline smt-8 font-semibold text-gray-500">{description}</p>
          </div>
          <a href="/Hero">a</a>
        </div>
      </div>
    </section>
  );
};

export default Vinilo;
