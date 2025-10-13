'use client';

import React from 'react';
import Image from 'next/image';
import useContent from '@/hooks/useContent';
import HeroButton from '@/components/ui/HeroButton';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const renderRichText = (nodes) =>
  nodes.map((node, index) => {
    if (node.type === 'text') {
      return (
        <React.Fragment key={index}>
          {node.text.split(/(\s+)/).map((part, i) => {
            const isWhitespace = /^\s+$/.test(part);
            return (
              <span
                key={i}
                className={`${node.bold && !isWhitespace ? 'font-bold' : ''} whitespace-pre-wrap break-words`}>
                {part}
              </span>
            );
          })}
        </React.Fragment>
      );
    }
    if (node.children) {
      return <React.Fragment key={index}>{renderRichText(node.children)}</React.Fragment>;
    }
    return null;
  });

const Hero = () => {
  const { content, isLoading } = useContent({
    apiKey: 'hero-section',
    fallbackKey: 'heroSection'
  });

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 110, behavior: 'smooth' });
    }
  };

  if (isLoading) return <LoadingAnimation />;

  const heroTitle = content?.heroTitle;
  const renderHeroTitle = (
    <>
      {heroTitle?.[0] && <span className="mb-4 block sm:mb-8">{renderRichText(heroTitle[0].children)}</span>}
      {heroTitle?.[1] && (
        <span className="mx-auto mb-3 block max-w-2xl leading-snug sm:mb-8 ">
          {renderRichText(heroTitle[1].children)}
        </span>
      )}

      {heroTitle?.[2] && <span className="mx-auto mb-2 block">{renderRichText(heroTitle[2].children)}</span>}
      {heroTitle?.[3] && <span className="mx-auto block">{renderRichText(heroTitle[3].children)}</span>}
    </>
  );

  return (
    <div
      className="relative flex flex-col items-center overflow-hidden px-6 py-16 text-gray-800/95 dark:text-darkForeground sm:px-[100px] sm:py-16"
      role="region"
      aria-labelledby="hero-section-title">
      {content?.lightModeBackground?.url && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${content.lightModeBackground.url})`,
            maskImage: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)'
          }}
          aria-hidden="true"
        />
      )}

      {content?.darkModeBackground?.url && (
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat dark:block"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${content.darkModeBackground.url})`,
            maskImage: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 100%)'
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 w-full max-w-full break-words text-center text-4xl font-medium tracking-wide sm:max-w-4xl sm:text-5xl">
        {renderHeroTitle}
      </div>

      <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-6 text-xl custom-lg:justify-start">
        <HeroButton
          onClick={() => scrollToSection('feature-list')}
          aria-label="Scroll to ELN section"
          className="w-48 border-2 border-[#2495cf] bg-[#2495cf] font-semibold dark:border-darkForeground dark:bg-darkBackground">
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
          className="w-48 border-2 border-[#2495cf] bg-neutral-50 font-semibold dark:border-darkForeground dark:bg-darkBackground">
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
