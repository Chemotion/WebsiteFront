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
      className="relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center text-[#008ab8]"
      role="region"
      aria-labelledby="eln-hero-heading"
      whileHover="hover">
      <h1
        id="eln-hero-heading"
        className="text-center text-4xl"
        aria-label="Start your journey with the most chemical of all ELNs">
        Start your&nbsp;
        <motion.span
          className="inline-block font-bold"
          variants={{
            hover: hoverEffect
          }}
          transition={{
            type: 'spring',
            stiffness: 500
          }}>
          Journey
        </motion.span>
        &nbsp;with the most&nbsp;
        <motion.span
          className="inline-block font-bold"
          variants={{
            hover: hoverEffect
          }}
          transition={{
            type: 'spring',
            stiffness: 500
          }}>
          Chemical
        </motion.span>
        &nbsp;of all&nbsp;
        <motion.span
          className="inline-block font-bold"
          variants={{
            hover: hoverEffect
          }}
          transition={{
            type: 'spring',
            stiffness: 500
          }}>
          ELNs
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default ELNHero;
