import './styles/App.css';
import Hero from './components/Hero';
import ImageSliderWithAudioPlayer from './components/Carrousel';
import tours from './data/tours'; 
import RandomDropDown from './components/modern-event-card';
import VideosSection from './components/Videos';
import Footer from './components/footer';
import { NavbarDemo } from './components/ui/navbar.demo';
import { WobbleCardDemo } from './components/ui/notice-section';
import { useEffect } from 'react';
import './styles/css.css'

function App() {
  const scrollToTop = () => {
    const scrollDuration = 500; // Duración en milisegundos
    const start = window.scrollY;
    const change = -start;
    const startTime = performance.now();
  
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1); // Normaliza el progreso entre 0 y 1
      const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // Easing
      window.scrollTo(0, start + change * easeInOutQuad);
  
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  };
  

  useEffect(() => {
    const button = document.getElementById('scrollToTopBtn');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='flex items-center justify-center mt-32'>
        <NavbarDemo/>
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id='discos'>
        <ImageSliderWithAudioPlayer/>
      </div>
      <div className='flex items-center text-center justify-center mt-32'>
        <h1 className='text-black bold' style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Agenda de <span style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight:'bold', textDecoration:'underline', color:'#8B8F61' }}>SHOWS</span>
        </h1>
      </div>
      <div  id='tour' ></div>
      <div className='grid mt-40 md:grid-cols-2 grid-cols-1 w-full max-w-[900px] h-fit justify-center m-auto'>
        {tours.map((tour) => (
          <RandomDropDown 
            key={tour.id} data={tour}
          />
        ))}
      </div>
      <div id="videos">
        <VideosSection />
      </div>
      <Footer />
      {/* <WobbleCardDemo/> */}
      <button 
        id="scrollToTopBtn" 
        onClick={scrollToTop} 
        className="fixed bottom-10 right-10 transition duration-300"
        style={{ display: 'none' }} 
      >
        ↑
      </button>
    </>
  );  
}

export default App;
