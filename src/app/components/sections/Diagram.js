'use client';
import { useState } from 'react';
import Image from 'next/image';

const Diagram = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      id="diagram"
      className="relative flex flex-col mb-16 mt-4 max-w-6xl items-center"
      role="region"
      aria-labelledby="diagram-heading">
      <div className="relative w-full custom-lg:px-0 px-4">
        <Image
          src="/Hauptgrafik.png"
          alt="Main Diagram showcasing key features"
          width={1130}
          height={1130}
          className="w-full h-full object-contain filter grayscale-[10%]"
          priority
          onLoad={() => setIsImageLoaded(true)}
        />
        {isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="text-7xl bg-white font-bold text-center text-black drop-shadow-lg">Demo</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diagram;
