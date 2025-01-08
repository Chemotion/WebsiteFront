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
      whileHover="hover">
      <h1 className="text-4xl text-center">
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
