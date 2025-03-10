'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useContent from '@/hooks/useContent';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const Diagram = () => {
  const { content, isLoading } = useContent({
    apiKey: 'flowchart-section',
    fallbackKey: 'flowchartSection'
  });

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  if (isLoading) return <LoadingAnimation />;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    if (!active) setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    if (!active) setActive(true);
  };

  const handleTouchEnd = () => {
    setActive(false);
  };

  const handleKeyDown = (e) => {
    const moveAmount = 10;
    setCursor((prev) => {
      let { x, y } = prev;
      switch (e.key) {
        case 'ArrowUp':
          y = Math.max(0, y - moveAmount);
          break;
        case 'ArrowDown':
          y = y + moveAmount;
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - moveAmount);
          break;
        case 'ArrowRight':
          x = x + moveAmount;
          break;
        case 'Escape':
          setActive(false);
          break;
        default:
          return prev;
      }
      return { x, y };
    });
    if (!active) setActive(true);
  };

  return (
    <div
      id="diagram"
      className="relative mb-16 mt-4 flex max-w-6xl flex-col items-center"
      role="region"
      aria-labelledby="diagram-heading">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Interactive flowchart"
        className="relative w-full cursor-default drop-shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:drop-shadow-md focus:outline-none">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center rounded-md bg-gray-200">
            <span>Loading Flowchart...</span>
          </div>
        )}
        <div className="mx-auto w-full max-w-[1130px]">
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

        <motion.div
          animate={{
            x: cursor.x,
            y: cursor.y,
            opacity: active ? 1 : 0,
            scale: active ? 1.2 : 0.8
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="pointer-events-none absolute left-0 top-0 size-[150px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)]"
        />
      </div>
    </div>
  );
};

export default Diagram;
