'use client';

import { motion } from 'framer-motion';

const GenericElementHero = () => {
  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id="labimotion"
      className="flex flex-col items-center mb-10 mt-10 text-[#e63946] relative cursor-default scroll-mt-[110px]"
      whileHover="hover">
      <h1 className="text-4xl text-center">
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

export default GenericElementHero;
