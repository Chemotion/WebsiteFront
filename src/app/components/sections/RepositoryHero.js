'use client';

import { motion } from 'framer-motion';

const RepositoryHero = () => {
  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id="repository"
      className="flex flex-col items-center mb-10 mt-10 text-gray-800 relative cursor-default scroll-mt-[110px]"
      whileHover="hover"
      role="region"
      aria-labelledby="repository-hero-heading">
      <h1
        id="repository-hero-heading"
        className="text-4xl text-center"
        tabIndex="0"
        aria-label="Mission Completed. Streamlined process from Lab to Publication.">
        Mission Completed.&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Streamlined
        </motion.span>
        &nbsp;process from&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Lab
        </motion.span>
        &nbsp;to&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Publication
        </motion.span>
        .
      </h1>
    </motion.div>
  );
};

export default RepositoryHero;
