'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 110;
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center px-6 sm:px-[100px] py-10 sm:py-20 relative"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at center 60%, rgba(246, 246, 246, 0) 20%, rgba(246, 246, 246, 1) 50%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath fill='%23389fd4' fill-opacity='0.1' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E")
        `,
        backgroundSize: 'cover, 100px 100px',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center, center'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="hero-section-title">
      <motion.div
        variants={itemVariants}
        id="hero-section-title"
        className="text-4xl sm:text-5xl font-bold text-center mb-3 "
        tabIndex="0"
        aria-label="Designed for chemists">
        Designed for chemists.
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="text-3xl sm:text-[40px] font-medium text-center mb-8"
        tabIndex="0"
        aria-label="Extended for life sciences">
        <span className="tracking-[0.1em] font-bold">Extended</span> for life sciences.
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="text-4xl sm:text-5xl font-medium text-center max-w-4xl mb-8 sm:tracking-tight"
        tabIndex="0"
        aria-label="Support for all your laboratory data from design to publication">
        <span className="block mb-2">
          From <span className="font-bold text-primary">design</span> to&nbsp;
          <span className="font-bold text-secondary">publication</span> –
        </span>
        <span className="block">support for all your laboratory data.</span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center mt-12 text-xl custom-lg:justify-start">
        <button
          type="button"
          onClick={() => scrollToSection('eln')}
          className="inline-flex items-center px-10 py-4 text-center text-gray-700 bg-[#F6F6F6] rounded-md font-semibold border-2
          border-[#008ab8] shadow-sm transition-all duration-300 ease-in-out 
          hover:bg-[#008ab8] hover:text-white"
          aria-label="Scroll to ELN section">
          Explore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
            aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
