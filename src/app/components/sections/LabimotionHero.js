'use client';

import { motion } from 'framer-motion';

const LabimotionHero = () => {
  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id="labimotion"
      className="flex flex-col items-center mb-10 mt-10 text-[#e63946] relative cursor-default scroll-mt-[110px]"
      whileHover="hover"
      role="region"
      aria-labelledby="labimotion-hero-heading">
      <h1
        id="labimotion-hero-heading"
        className="text-4xl text-center"
        tabIndex="0"
        aria-label="Out of Chemistry. Generic Elements for Life Sciences">
        Out of Chemistry.&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Generic Elements
        </motion.span>
        &nbsp;for&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Life Sciences
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default LabimotionHero;
