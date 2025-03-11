'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import useContent from '@/hooks/useContent';
import { HeroButton } from '@/components/ui/HeroButton';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const renderRichText = (nodes) => {
  return nodes.map((node, index) => {
    if (node.type === 'text') {
      const extraClass = node.bold && node.text.trim() === 'Extended' ? 'tracking-widest' : '';
      return (
        <React.Fragment key={index}>
          {node.text.split(' ').map((word, i) => (
            <span
              key={i}
              className={`${node.bold ? 'animated-word font-bold' : ''} ${extraClass} transition-colors duration-300 ease-in-out`}>
              {word}{' '}
            </span>
          ))}
        </React.Fragment>
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

  const backgroundStyle = useMemo(() => {
    if (!isDark && content?.heroBackgroundSVG?.url) {
      return {
        '--hero-background': `url("${process.env.NEXT_PUBLIC_STRAPI_URL}${content.heroBackgroundSVG.url}")`
      };
    }
    return {};
  }, [isDark, content]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroRef.current) {
        const words = heroRef.current.querySelectorAll('.animated-word');
        if (words.length > 0) {
          const randomIndex = Math.floor(Math.random() * words.length);
          const randomWord = words[randomIndex];
          randomWord.classList.add('animate-hero-word');
          randomWord.addEventListener(
            'animationend',
            () => {
              randomWord.classList.remove('animate-hero-word');
            },
            { once: true }
          );
        }
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);

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

  if (isLoading) return <LoadingAnimation />;

  const heroTitle = content?.heroTitle;

  return (
    <div
      ref={heroRef}
      style={backgroundStyle}
      className={`relative flex flex-col items-center px-6 py-10 text-gray-800/95 dark:text-darkForeground sm:px-[100px] sm:py-20 ${!isDark ? 'hero-background' : ''}`}
      role="region"
      aria-labelledby="hero-section-title">
      {heroTitle[0] && (
        <div
          id="hero-section-title"
          className="mb-3 text-center text-4xl font-bold sm:text-5xl"
          aria-label="Designed for chemists">
          {renderRichText(heroTitle[0].children)}
        </div>
      )}

      {heroTitle[1] && (
        <div
          className="my-4 text-center text-4xl font-medium sm:mb-8 sm:mt-0 sm:text-[40px]"
          aria-label="Extended for life sciences">
          {renderRichText(heroTitle[1].children)}
        </div>
      )}

      {(heroTitle[3] || heroTitle[4]) && (
        <div
          className="mb-8 max-w-4xl text-center text-4xl font-medium sm:text-5xl sm:tracking-tight"
          aria-label="Support for all your laboratory data from design to publication">
          {heroTitle[3] && <span className="mb-2 block">{renderRichText(heroTitle[3].children)}</span>}
          {heroTitle[4] && <span className="block">{renderRichText(heroTitle[4].children)}</span>}
        </div>
      )}

      <div className="mt-12 flex flex-wrap justify-center gap-6 text-xl custom-lg:justify-start">
        <HeroButton
          onClick={() => scrollToSection('eln')}
          aria-label="Scroll to ELN section"
          className="w-48 border-2 border-[#008ab8] bg-[#008ab8] font-semibold dark:border-darkForeground dark:bg-darkBackground">
          <div className="text-white dark:text-darkForeground">{content?.buttonText}</div>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.buttonSVG?.url}`}
            alt={content?.buttonSVG?.alternativeText}
            className="ml-2 brightness-0 invert"
            width={24}
            height={Math.round(content?.buttonSVG?.height * (24 / content?.buttonSVG?.width))}
            unoptimized
          />
        </HeroButton>

        <HeroButton
          as="a"
          href={content?.demoButtonLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open demo in new tab"
          className="w-48 border-2 border-[#008ab8] bg-neutral-50 font-semibold dark:border-darkForeground dark:bg-darkBackground">
          {content?.demoButtonText}
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.demoButtonSVG?.url}`}
            alt={content?.demoButtonSVG?.alternativeText}
            className="ml-2 dark:brightness-0 dark:invert"
            width={24}
            height={Math.round(content?.demoButtonSVG?.height * (24 / content?.demoButtonSVG?.width))}
            unoptimized
          />
        </HeroButton>
      </div>
    </div>
  );
};

export default Hero;
