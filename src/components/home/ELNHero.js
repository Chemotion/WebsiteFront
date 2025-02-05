'use client';

import { motion } from 'framer-motion';
import useSWR from 'swr';
import fallback from '/public/fallback.json';

const fetcher = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/eln-hero-section?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const ELNHero = () => {
  const { data, error, isLoading } = useSWR('eln-hero-section', fetcher);

  const fallbackContent = fallback.elnHero;
  if (isLoading) return <div>Loading...</div>;

  const content = !error && data?.data ? data.data : fallbackContent;

  const heroTitle = content?.heroTitle || [];
  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id="eln"
      className="relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center text-[#008ab8]"
      whileHover="hover"
      role="region"
      aria-labelledby="labimotion-hero-heading">
      <h1
        id="eln-hero-heading"
        className="text-center text-4xl"
        aria-label="Start your journey with the most chemical of all ELNs">
        {heroTitle.map((paragraph, idx) => (
          <span key={idx}>
            {paragraph.children.map((child, childIdx) =>
              child.bold ? (
                <motion.span
                  key={childIdx}
                  className="inline-block font-bold"
                  variants={{
                    hover: hoverEffect
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500
                  }}>
                  {child.text}
                </motion.span>
              ) : (
                <span key={childIdx}>{child.text}</span>
              )
            )}
          </span>
        ))}
      </h1>
    </motion.div>
  );
};

export default ELNHero;
