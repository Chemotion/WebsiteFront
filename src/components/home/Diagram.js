'use client';
import { useState } from 'react';
import Image from 'next/image';

const Diagram = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      id="diagram"
      className="relative mb-16 mt-4 flex max-w-6xl flex-col items-center"
      role="region"
      aria-labelledby="diagram-heading">
      <div className="relative w-full px-4 custom-lg:px-0">
        <Image
          src="/images/Hauptgrafik.png"
          alt="Main Diagram showcasing key features"
          width={1130}
          height={1130}
          className="size-full object-contain grayscale-[10%]"
          onLoad={() => setIsImageLoaded(true)}
          priority
        />
        {isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="bg-white text-center text-7xl font-bold text-black drop-shadow-lg">Demo</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diagram;
