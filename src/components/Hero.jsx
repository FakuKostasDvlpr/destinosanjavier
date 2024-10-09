import "../styles/index.css";

const Hero = () => {
  return (
    <section className="w-full h-[500px] relative">
      <img
        src="1.png"
        alt="image logo"
        className="w-full max-w-screen h-[500px] object-cover backdrop-opacity-55"
      />
      {/* Capa de fondo negro semi-transparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-400 opacity-65"></div>
      {/* Texto centrado en la parte inferior */}
      <div className=" mb-40 absolute bottom-0 w-full p-8 flex justify-center items-center">
        <img src="logo1-modified.png" className="w-full max-w-[900px]" alt="" />
      </div>
      
    </section>
  );
};

export default Hero;
