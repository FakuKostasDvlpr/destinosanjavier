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
    const scrollDuration = 200; // Duración del desplazamiento en milisegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
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
      <div className='flex items-center justify-center mt-40'>
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
