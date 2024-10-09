"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <div className='flex items-center text-center justify-center mt-32'>
        <h1 className='text-black bold' style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
        Newsletter Destino San Javier <span style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight:'bold', textDecoration:'underline', color:'#8B8F61' }}></span>
        </h1>
      </div>
      
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-[600px]">
    <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[600px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <iframe
                className="w-full max-w-[480px] h-64 md:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/UDvJIgxQugM?controls=0"
                title="title"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
      </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      

     

    </div>
    </>

  );
}
