'use client';

import { motion } from 'framer-motion';
import useSWR from 'swr';
import fallback from '/public/fallback.json';

const fetcher = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/repository-section?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const RepositoryHero = () => {
  const { data, error, isLoading } = useSWR('repository-section', fetcher);

  const fallbackContent = fallback.repositorySection;
  if (isLoading) return <div>Loading...</div>;

  const content = !error && data?.data ? data.data : fallbackContent;

  const heroTitle = content?.heroTitle || [];
  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id="repository"
      className="relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center text-gray-800"
      whileHover="hover"
      role="region"
      aria-labelledby="repository-hero-heading">
      <h1
        id="repository-hero-heading"
        className="text-center text-4xl"
        aria-label="Mission Completed. Streamlined process from Lab to Publication.">
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

export default RepositoryHero;
