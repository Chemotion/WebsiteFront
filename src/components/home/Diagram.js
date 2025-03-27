'use client';
import { useState } from 'react';
import Image from 'next/image';
import useContent from '@/hooks/useContent';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const Diagram = () => {
  const { content, isLoading } = useContent({
    apiKey: 'flowchart-section',
    fallbackKey: 'flowchartSection'
  });

  const [imgLoaded, setImgLoaded] = useState(false);

  if (isLoading) return <LoadingAnimation />;

  return (
    <div
      id="diagram"
      className="relative mb-14 mt-4 flex custom-lg:px-0 px-4 max-w-6xl flex-col items-center"
      role="region"
      aria-labelledby="diagram-heading">
      <div
        tabIndex={0}
        role="button"
        aria-label="flowchart showcasing chemotion ELN"
        className="relative w-full cursor-default transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] ">
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-md bg-neutral-100 transition-all duration-700 ease-out ${
            imgLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}>
          <span>Loading...</span>
        </div>

        <div
          className={`mx-auto w-full max-w-[1130px] transition-all duration-700 ease-out ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.flowchartImage?.url}`}
            alt={content?.flowchartImage?.alternativeText}
            width={1130}
            height={Math.round(content?.flowchartImage?.height * (1130 / content?.flowchartImage?.width))}
            unoptimized
            priority
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Diagram;
