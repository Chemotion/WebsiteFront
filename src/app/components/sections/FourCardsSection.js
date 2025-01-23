'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
      className="relative p-8 h-[400px] rounded-md border-2 border-[#008ab8] flex flex-col items-start cursor-pointer bg-[#F6F6F6] w-full hover:shadow-lg"
      variants={cardVariants}
      initial="initial"
      animate={isClicked ? 'clicked' : 'initial'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.0 }}>
      <AnimatePresence mode="wait">
        {isClicked ? (
          <motion.ul
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-gray-700 text-md font-semibold text-left list-disc pl-5 space-y-2 overflow-hidden mt-2 mr-6">
            {longdescription.split('\n').map((point, index) => (
              <motion.li key={index} custom={index} variants={listItemVariants}>
                {point.trim()}
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            key="initial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <motion.h2
              className="text-2xl text-gray-800 font-semibold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}>
              {title}
            </motion.h2>
            <motion.p
              className="text-gray-700 text-[16px] font-semibold mb-8 mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}>
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}>
              <div
                aria-hidden="true"
                className=" w-full aspect-[2/1] flex items-end justify-center rounded-md overflow-hidden border-2 border-[#008ab8] mx-auto">
                <Image
                  src={image}
                  alt={`Visual representation of ${title}`}
                  width={600}
                  height={300}
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute top-4 right-2 flex items-center justify-center w-9 h-9 rounded-md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <div className="relative w-6 h-6">
          <div
            className={`absolute w-full h-[4px] bg-[#008ab8] transform transition-transform duration-300 ${
              isClicked ? 'rotate-45' : ''
            }`}
          />
          <div
            className={`absolute w-full h-[4px] bg-[#008ab8] transform transition-transform duration-300 ${
              isClicked ? '-rotate-45' : 'rotate-90'
            }`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CardContainer = () => {
  const cards = [
    {
      title: 'Plan',
      description: 'Plan, collaborate, and streamline your data.',
      image: '/demo2.jpg',
      longdescription: `Organize your projects and share with colleagues
        Collaborate using synchronized collections
        Easily navigate your work with an intuitive search
        Generate detailed reports to document progress
        Search literature efficiently with SciFinder
        Design experiments by creating and describing compounds as samples
        Import known chemicals directly via linkage to the CAS database
        Create and manage chemical reactions with precision`
    },
    {
      title: 'Collect',
      description: 'Collect and organize experimental and analytical data.',
      image: '/demo2.jpg',
      longdescription: `Record experiment details in the description field.
        Document purification steps in the scheme tab.
        Log product properties in the samples' properties tab.
        Use the inbox for streamlined data collection.
        Store analytical data in the Analysis tab.
        Add relevant metadata to corresponding analyses for thorough documentation.`
    },
    {
      title: 'Analyse',
      description: 'Analyse and standardise your experimental data.',
      image: '/demo2.jpg',
      longdescription: `Convert analytical data files into standardised open formats using ChemConverter.
        Analyze NMR and other analytical data seamlessly with ChemSpectra.
        Perform advanced NMR data analysis with NMRium.`
    },
    {
      title: 'Publish',
      description: 'Publish and share FAIR data effectively.',
      image: '/demo2.jpg',
      longdescription: `Submit experiments and related data to the Chemotion Repository.
        Facilitate peer review through the Chemotion Repository.
        Describe submitted data with DOIs for accurate referencing.
        Generate comprehensive SI reports for publication.`
    }
  ];

  return (
    <div className="w-full max-w-6xl px-4 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
        {cards.map((card, index) => (
          <section id={card.title.toLowerCase()} key={index} className="w-full">
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              longdescription={card.longdescription}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
