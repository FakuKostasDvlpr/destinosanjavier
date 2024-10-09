import React from 'react';

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Aunque ya no vuelva a verte (Sinfónico)",
      url: "https://www.youtube.com/embed/iDzf1gmKHKI?controls=0",
    },
    {
      id: 2,
      title: "Justo Ahora (Sinfónico)",
      url: "https://www.youtube.com/embed/UDvJIgxQugM?controls=0",
    },
    // Puedes agregar más videos aquí
  ];

  return (
    <>
    <div className='flex items-center text-center justify-center mt-32'>
        <h1 className='text-black bold' style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
        Nuevos <span style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight:'bold', textDecoration:'underline', color:'#8B8F61' }}>Estrenos</span>
        </h1>
      </div>
    <section className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center py-10 bg-transparent">
      {videos.map((video) => (
        <div key={video.id} className="w-full flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <h3 className="text-center text-lg font-semibold text-[#858a4d] mb-4">
              {video.title}
            </h3>
            <div className="flex p-10 w-full items-center m-auto justify-center">
              <iframe
                className="w-full max-w-[580px] h-64 md:h-96 rounded-lg shadow-lg"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </section>
    </>

  );
};

export default VideosSection;
