'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import useContent from '@/hooks/useContent';
import { HeroButton } from '@/components/ui/HeroButton';

const renderRichText = (nodes) => {
  return nodes.map((node, index) => {
    if (node.type === 'text') {
      const extraClass = node.bold && node.text.trim() === 'Extended' ? 'tracking-widest' : '';
      return (
        <span key={index} className={`${node.bold ? 'font-bold' : ''} ${extraClass}`}>
          {node.text}
        </span>
      );
    }
    if (node.children) {
      return <React.Fragment key={index}>{renderRichText(node.children)}</React.Fragment>;
    }
    return null;
  });
};

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { content, isLoading } = useContent({
    apiKey: 'hero-section',
    fallbackKey: 'heroSection'
  });
  const heroRef = useRef(null);

  useEffect(() => {
    if (!isDark && content?.heroBackgroundSVG?.url && heroRef.current) {
      const bgUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${content.heroBackgroundSVG.url}`;
      heroRef.current.style.setProperty('--hero-background', `url("${bgUrl}")`);
    }
  }, [isDark, content]);

  if (isLoading) return <div>Loading...</div>;

  const heroTitle = content?.heroTitle || [];

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
      ref={heroRef}
      className={`relative flex flex-col items-center px-6 py-10 sm:px-[100px] sm:py-20 ${!isDark ? 'hero-background' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="hero-section-title">
      {heroTitle[0] && (
        <motion.div
          variants={itemVariants}
          id="hero-section-title"
          className="mb-3 text-center text-4xl font-bold sm:text-5xl"
          tabIndex="0"
          aria-label="Designed for chemists">
          {renderRichText(heroTitle[0].children)}
        </motion.div>
      )}

      {heroTitle[1] && (
        <motion.div
          variants={itemVariants}
          className="my-4 text-center text-4xl font-medium sm:mb-8 sm:mt-0 sm:text-[40px]"
          tabIndex="0"
          aria-label="Extended for life sciences">
          {renderRichText(heroTitle[1].children)}
        </motion.div>
      )}

      {(heroTitle[3] || heroTitle[4]) && (
        <motion.div
          variants={itemVariants}
          className="mb-8 max-w-4xl text-center text-4xl font-medium sm:text-5xl sm:tracking-tight"
          aria-label="Support for all your laboratory data from design to publication">
          {heroTitle[3] && <span className="mb-2 block">{renderRichText(heroTitle[3].children)}</span>}
          {heroTitle[4] && <span className="block">{renderRichText(heroTitle[4].children)}</span>}
        </motion.div>
      )}

      <motion.div
        variants={itemVariants}
        className="mt-12 flex flex-wrap justify-center gap-6 text-xl custom-lg:justify-start">
        <HeroButton
          onClick={() => scrollToSection('eln')}
          aria-label="Scroll to ELN section"
          className="w-48 border-2 border-[#008ab8] bg-[#008ab8] font-semibold dark:border-darkForeground dark:bg-darkBackground">
          <div className="text-white">{content?.buttonText}</div>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.buttonSVG?.url}`}
            alt={content?.buttonSVG?.alternativeText}
            className="ml-2 brightness-0 invert"
            width={24}
            height={24}
            unoptimized
          />
        </HeroButton>

        <HeroButton
          onClick={() => window.open(content?.demoButtonLink, '_blank')}
          aria-label="Open demo in new tab"
          className="w-48 border-2 border-[#008ab8] bg-neutral-50 font-semibold dark:border-darkForeground dark:bg-darkBackground">
          {content?.demoButtonText}
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.demoButtonSVG?.url}`}
            alt={content?.demoButtonSVG?.alternativeText}
            className="ml-2"
            width={24}
            height={24}
            unoptimized
          />
        </HeroButton>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
