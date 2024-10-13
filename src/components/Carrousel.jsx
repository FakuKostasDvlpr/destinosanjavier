import React, { useState, useEffect, useRef } from 'react';
import { BackgroundLines } from './ui/backkgrounAnimation';
import { EyeIcon, PauseIcon, PlayIcon } from 'lucide-react';
import '../styles/css.css';
import songs from '../data/songs';

const ImageSliderWithAudioPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Tiempo actual de la canción
  const [duration, setDuration] = useState(0); // Duración total de la canción
  const audioRef = useRef(null); // Referencia para el reproductor de audio

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false); // Detiene la reproducción cuando la pista termina
      setCurrentTime(0); // Reinicia el tiempo al finalizar la canción
    };

    const audio = audioRef.current;
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play(); // Reproduce la canción cuando el índice cambia y está en estado de reproducción
    } else {
      audioRef.current.pause();
    }
  }, [currentIndex, isPlaying]); // Se ejecuta cuando cambia la canción o el estado de reproducción

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime); // Actualiza el tiempo actual
      setDuration(audio.duration); // Guarda la duración total de la canción
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const getImageStyle = (index) => {
    const diff = (index - currentIndex + songs.length) % songs.length;
    let translateX = '0';
    let scale = 0.1;
    let zIndex = 0;
    let opacity = 0.5;

    if (diff === 0) {
      scale = 1.3;
      zIndex = 1;
      opacity = 1;
    } else if (diff === 1) {
      translateX = '100%';
      scale = 0.6;
      zIndex = 0;
      opacity = 0.4;
    } else if (diff > 1) {
      translateX = `${-diff * 124}px`;
      scale = 0.6;
      zIndex = 0;
      opacity = 0.4;
    } else {
      translateX = '-120%';
      scale = 0.7;
      zIndex = 0;
      opacity = 0.5;
    }

    return {
      transform: `translateX(${translateX}) translateY(0) scale(${scale})`,
      zIndex,
      opacity,
      transition: 'all 0.4s ease-in-out',
    };
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const calculateProgress = () => {
    if (duration > 0) {
      return (currentTime / duration) * 100;
    }
    return 0;
  };

  return (
    <>
      <section className="relative h-fit mb-10 w-full bg-transparent flex flex-col items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center">
          {/* <BackgroundLines /> */}
        </div>
        <div className="relative flex mb-20 bg-white mt-40">
          <h1 className="text-black bold" style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>
            Lo más <span style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>escuchado</span>
          </h1>
        </div>

        {/* Image Slider */}
        <a className="relative w-full max-w-[370px] h-[339px] md:h-[439px]">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className="absolute text-center top-0 left-0 w-full items-center justify-center m-auto h-fit transition-all duration-500 ease-in-out cursor-pointer"
              style={getImageStyle(index)}
              onClick={nextSlide}
            >
              {index === currentIndex && (
                <div className="flex bg-white justify-center items-center">
                  <div className="pt-3 px-1">
                    <EyeIcon color="#9d4edd" size={22} />
                  </div>
                  <p
                    className="ViewsTrack font-bold"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                  >
                    <span
                      className="text-[#9d4edd] font-bold"
                      style={{ fontSize: 'clamp(1.5rem, 1vw, 2.5rem)' }}
                    >
                      {song.views}
                    </span>
                  </p>
                </div>
              )}
              <div className="flex h-fit items-center justify-center m-auto mb-40">
                <img
                  src={song.image}
                  alt={song.name}
                  className="rounded-lg object-contain shadow-2xl w-full md:max-w-[300px] max-w-[200px]"
                />
              </div>
            </div>
          ))}
        </a>
        <div className="relative h-full bg-purple-200 rounded-lg w-80 p-3">
          <div className="flex gap-3 items-center space-x-3">
            <button
              onClick={togglePlay}
              className="text-purple-700 z-10 relative hover:text-purple-900 transition-colors"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className="flex-grow">
              <div className="text-purple-900 font-semibold">
                {songs[currentIndex].name}
              </div>
              <div className="text-purple-700 text-sm">Destino San Javier</div>
            </div>
            <div className="text-purple-700">
              {/* Mostrar el tiempo restante de la canción */}
              {formatTime(duration - currentTime)}
            </div>
          </div>
          <div className="mt-2 bg-purple-300 h-1 rounded-full">
            {/* Línea de progreso */}
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
        {/* Hidden audio element */}
        <audio ref={audioRef} src={songs[currentIndex].previewSong} />
      </section>
    </>
  );
};

export default ImageSliderWithAudioPlayer;
