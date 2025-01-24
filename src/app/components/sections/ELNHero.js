'use client';

import { motion } from 'framer-motion';

const ELNHero = () => {
  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id="eln"
      className="flex flex-col items-center mb-10 mt-10 text-[#008ab8] relative cursor-default scroll-mt-[110px]"
      role="region"
      aria-labelledby="eln-hero-heading"
      whileHover="hover">
      <h1
        id="eln-hero-heading"
        className="text-4xl text-center"
        tabIndex="0"
        aria-label="Start your journey with the most chemical of all ELNs">
        Start your&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Journey
        </motion.span>
        &nbsp;with the most&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          Chemical
        </motion.span>
        &nbsp;of all&nbsp;
        <motion.span
          className="font-bold inline-block"
          variants={{
            hover: hoverEffect
          }}
          transition={{ type: 'spring', stiffness: 500 }}>
          ELNs
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default ELNHero;
