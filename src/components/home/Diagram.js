'use client';

import React from 'react';
import Image from 'next/image';
import useContent from '@/hooks/useContent';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const Diagram = React.memo(() => {
  const { content, isLoading } = useContent({
    apiKey: 'flowchart-section',
    fallbackKey: 'flowchartSection'
  });

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const img = content.flowchartImage;
  const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const width = 1130;
  const height = Math.round(img.height * (width / img.width));
  const src = `${BASE_URL}${img.url}`;

  return (
    <div
      id="diagram"
      className="relative mt-14 flex max-w-6xl flex-col items-center px-4 custom-lg:px-0"
      role="region"
      aria-labelledby="diagram-heading">
      <div
        tabIndex={0}
        role="button"
        aria-label="flowchart showcasing chemotion ELN"
        className="relative w-full cursor-default transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01]">
        <div className="mx-auto w-full max-w-[1130px]">
          <Image
            src={src}
            alt={img.alternativeText || 'Chemotion ELN flowchart'}
            width={width}
            height={height}
            priority
            loading="eager"
            sizes="(max-width: 1130px) 100vw, 1130px"
            placeholder={img.blurDataURL ? 'blur' : undefined}
            blurDataURL={img.blurDataURL}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
});

Diagram.displayName = 'Diagram';
export default Diagram;
