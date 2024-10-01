import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "../index.css";

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Divide el texto en caracteres usando SplitType
    const typeSplit = new SplitType(headingRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    // Configura la animación con gsap
    gsap.from(typeSplit.chars, {
      y: "100%",
      opacity: 1,
      duration: 1.8,
      ease: "power4.inOut",
      stagger: 0.03,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top center",
      },
    });

    return () => {
      typeSplit.revert(); // Revertir el SplitType cuando el componente se desmonte
    };
  }, []);

  
  return (
    <section className="w-full h-screen relative">
      <img
        src="HeroImage.jpg"
        alt="image logo"
        className="w-full h-screen object-cover backdrop-opacity-75"
      />
      {/* Capa de fondo negro semi-transparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      {/* Texto centrado en la parte inferior */}
      <div className="absolute bottom-0 w-full p-8 flex justify-center items-center">
        <h1
          ref={headingRef}
          className="mb-12 text-[#D9D6CC] font-bold text-center tracking-wider uppercase"
          style={{
            fontSize: "clamp(2rem, 12vw, 14rem)", // Ajuste responsivo para mobile y desktop
            lineHeight: "clamp(2.5rem, 10vw, 15rem)", // Ajuste del alto de línea
          }}
        >
          Destino san javier
        </h1>
      </div>
    </section>
  );
};

export default Hero;
