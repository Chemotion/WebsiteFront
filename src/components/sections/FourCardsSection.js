'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
import fallback from '/public/fallback.json';

const fetcher = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/eln-four-steps-sections?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Card = ({ title, description, image, longdescription }) => {
  const [isClicked, setIsClicked] = useState(false);
  const cardRef = useRef(null);
  const timerRef = useRef(null);

  const handleCardClick = () => {
    setIsClicked(!isClicked);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isClicked && cardRef.current && !cardRef.current.contains(event.target)) {
        if (!timerRef.current) {
          timerRef.current = setTimeout(() => {
            setIsClicked(false);
            timerRef.current = null;
          }, 10000);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isClicked]);

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)'
    },
    clicked: {
      scale: 1.02,
      boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={handleCardClick}
      className="relative flex h-[400px] w-full cursor-pointer flex-col items-start rounded-md border-2 border-[#008ab8] p-8 hover:shadow-lg"
      variants={cardVariants}
      initial="initial"
      animate={isClicked ? 'clicked' : 'initial'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.0 }}
      role="button"
      aria-pressed={isClicked}
      tabIndex="0"
      aria-labelledby={`${title}-heading`}
      aria-describedby={`${title}-description`}>
      <AnimatePresence mode="wait">
        {isClicked ? (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-md mr-6 mt-2 space-y-2 overflow-hidden text-left font-semibold text-gray-700"
            aria-labelledby={`${title}-details`}>
            {longdescription?.map((feature, fIdx) => {
              if (feature.type === 'list' && feature.format === 'unordered') {
                return (
                  <motion.ul key={fIdx} className="list-disc pl-5">
                    {feature.children.map((listItem, liIdx) => {
                      if (listItem.type === 'list-item') {
                        const bulletText = listItem.children.map((child) => child.text).join(' ');
                        return (
                          <motion.li key={liIdx} custom={liIdx} variants={listItemVariants} className="mb-2">
                            {bulletText}
                          </motion.li>
                        );
                      }
                      return null;
                    })}
                  </motion.ul>
                );
              }
              //other types
              return null;
            })}
          </motion.div>
        ) : (
          <motion.div
            key="initial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}>
            <motion.h2
              id={`${title}-heading`}
              className="text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut'
              }}
              tabIndex="0"
              aria-label={title}>
              {title}
            </motion.h2>
            <motion.p
              id={`${title}-description`}
              className="mb-8 mt-4 text-[16px] font-semibold text-gray-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: 0.1
              }}
              tabIndex="0">
              {description}
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: 0.2
              }}>
              <div
                aria-hidden="true"
                className="mx-auto flex aspect-[2/1] w-full items-end justify-center overflow-hidden rounded-md border-2 border-[#008ab8]">
                {image ? (
                  <Image
                    src={image}
                    alt={`Visual representation of ${title}`}
                    width={460}
                    height={230}
                    className="object-cover object-bottom"
                  />
                ) : (
                  <div className="flex h-full w-[460px] items-center justify-center bg-gray-200 object-cover object-bottom">
                    <span className="text-xl font-bold text-gray-600">No Image</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute right-2 top-4 flex size-9 items-center justify-center rounded-md"
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}>
        <div className="relative size-6">
          <div
            className={`absolute h-[4px] w-full bg-[#008ab8] transition-transform duration-300 ${isClicked ? 'rotate-45' : ''}`}
          />
          <div
            className={`absolute h-[4px] w-full bg-[#008ab8] transition-transform duration-300 ${isClicked ? '-rotate-45' : 'rotate-90'}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CardContainer = () => {
  const { data, error, isLoading } = useSWR('eln-four-steps-sections', fetcher);

  const fallbackContent = fallback.elnFourStepsSection;
  if (isLoading) return <div>Loading...</div>;

  const content = !error && data?.data ? data.data : fallbackContent;

  const order = ['Plan', 'Collect', 'Analyse', 'Publish'];
  const sortedContent = content.sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title));

  return (
    <div className="mb-14 w-full max-w-6xl px-4" role="region" aria-labelledby="card-container-heading">
      <h2 id="card-container-heading" className="sr-only">
        ELN Four Steps
      </h2>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        {sortedContent.map((card, index) => {
          const imageUrl = card.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${card.image.url}` : null;

          return (
            <section
              id={card.title?.toLowerCase()}
              key={index}
              className="w-full"
              aria-labelledby={`${card.title}-heading`}>
              <Card title={card.title} description={card.subtitle} image={imageUrl} longdescription={card.features} />
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
