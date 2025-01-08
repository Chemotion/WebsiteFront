'use client';
import { useState } from 'react';
import Image from 'next/image';

const Diagram = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative flex flex-col max-w-7xl items-center text-[#4D5357]">
      <div className="relative w-full custom-lg:px-0 px-4">
        <Image
          src="/Hauptgrafik.png"
          alt="Main Diagram"
          width={1300}
          height={1300}
          className="w-full h-full object-contain filter grayscale-[50%]"
          priority
          onLoad={() => setIsImageLoaded(true)}
        />
        {isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl bg-white font-bold text-center text-black drop-shadow-lg">Demo</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diagram;
