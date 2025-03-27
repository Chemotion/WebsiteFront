import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' }
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

export default function Card({
  title,
  description,
  image,
  longDescription,
  borderColor = '#2495cf',
  onClickOutsideDelay = 10000
}) {
  const [isClicked, setIsClicked] = useState(false);
  const cardRef = useRef(null);
  const imageContainerRef = useRef(null);
  const timerRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const hasMounted = useRef(false);
  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const handleCardClick = () => {
    setIsClicked((prev) => !prev);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isDark) {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--border-color', borderColor);
      }
      if (imageContainerRef.current) {
        imageContainerRef.current.style.setProperty('--border-color', borderColor);
      }
    }
  }, [isDark, borderColor]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isClicked && cardRef.current && !cardRef.current.contains(event.target)) {
        if (!timerRef.current) {
          timerRef.current = setTimeout(() => {
            setIsClicked(false);
            timerRef.current = null;
          }, onClickOutsideDelay);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isClicked, onClickOutsideDelay]);

  const renderClickedContent = () => (
    <motion.div
      key="content"
      initial={hasMounted.current ? 'hidden' : false}
      animate="visible"
      exit={hasMounted.current ? 'hidden' : false}
      className="text-md mr-6 mt-2 space-y-2 overflow-hidden text-left text-sm font-light text-gray-700 dark:text-darkForeground sm:text-base"
      aria-labelledby={`${title}-details`}>
      {longDescription?.map((feature, fIdx) => {
        if (feature.type === 'paragraph') {
          return (
            <motion.p key={fIdx} className="mb-2" variants={listItemVariants}>
              {feature.children.map((child, idx) =>
                child.bold ? (
                  <span key={idx} className="font-semibold text-gray-900 dark:text-white">
                    {child.text}
                  </span>
                ) : (
                  <span key={idx} className="ml-1">
                    {child.text}
                  </span>
                )
              )}
            </motion.p>
          );
        }
        return null;
      })}
    </motion.div>
  );

  const renderDefaultContent = () => (
    <motion.div
      key="initial"
      initial={hasMounted.current ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={hasMounted.current ? { opacity: 0, y: 20 } : false}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <motion.h2
        id={`${title}-heading`}
        className="text-2xl font-semibold text-gray-800 dark:text-darkForeground"
        initial={hasMounted.current ? { opacity: 0, y: -10 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        tabIndex={0}
        aria-label={title}>
        {title}
      </motion.h2>
      <motion.p
        id={`${title}-description`}
        className="mb-8 mt-4 text-[16px] font-semibold text-gray-700 dark:text-darkForeground"
        initial={hasMounted.current ? { opacity: 0, y: -10 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        tabIndex={0}>
        {description}
      </motion.p>
      <motion.div
        initial={hasMounted.current ? { opacity: 0, scale: 0.95 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}>
        <div
          ref={imageContainerRef}
          aria-hidden="true"
          className={`mx-auto flex aspect-[2/1] w-full items-end justify-center overflow-hidden rounded-md border-2 dark:border-darkForeground ${
            !isDark ? 'border-dynamic' : ''
          }`}>
          {image ? (
            <Image
              src={image}
              alt={`Visual representation of ${title}`}
              width={460}
              height={230}
              className="object-cover object-bottom"
              unoptimized
            />
          ) : (
            <div className="flex h-full w-[460px] items-center justify-center bg-gray-200">
              <span className="text-xl font-bold text-gray-600">No Image</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      ref={cardRef}
      onClick={handleCardClick}
      className={`relative flex h-[400px] w-full cursor-pointer flex-col items-start rounded-md border-2 p-8 hover:shadow-lg dark:border-darkForeground ${
        !isDark ? 'border-dynamic' : ''
      }`}
      variants={cardVariants}
      initial={hasMounted.current ? 'initial' : false}
      animate={isClicked ? 'clicked' : 'initial'}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.0 }}
      role="button"
      aria-pressed={isClicked}
      tabIndex={0}
      aria-labelledby={`${title}-heading`}
      aria-describedby={`${title}-description`}>
      <AnimatePresence mode="wait">{isClicked ? renderClickedContent() : renderDefaultContent()}</AnimatePresence>

      <motion.div
        className="absolute right-2 top-4 flex size-9 items-center justify-center rounded-md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <div className="relative size-6">
          <div
            className={`absolute h-[4px] w-full bg-[#2495cf] transition-transform duration-300 dark:bg-darkForeground ${
              isClicked ? 'rotate-45' : ''
            }`}
          />
          <div
            className={`absolute h-[4px] w-full bg-[#2495cf] transition-transform duration-300 dark:bg-darkForeground ${
              isClicked ? '-rotate-45' : 'rotate-90'
            }`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
