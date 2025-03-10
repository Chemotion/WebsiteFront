'use client';

import Image from 'next/image';
import Link from 'next/link';
import ModeToggle from '@/components/ui/DarkModeToggle';
import useContent from '@/hooks/useContent';

const Footer = () => {
  const { content, isLoading } = useContent({
    apiKey: 'footer',
    fallbackKey: 'footer'
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <footer
      className="bg-[#eeeeee] py-8 text-gray-700 dark:border-t dark:border-darkForeground dark:bg-darkBackground dark:text-darkForeground"
      role="contentinfo">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-6 flex flex-col items-start space-y-6">
          <div className="w-full text-center custom-lg:text-left">
            <p className="text-base">{content.fundedText}</p>
          </div>
          <div
            className="flex flex-col items-center space-y-8 custom-lg:flex-row custom-lg:space-x-16 custom-lg:space-y-0"
            role="list"
            aria-label="Funding organizations">
            <div role="listitem">
              <a
                href={content.dfgLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deutsche Forschungsgemeinschaft"
                className="transition-transform duration-300 hover:shadow-lg">
                <div className="transition-all duration-300 ease-in-out hover:scale-105">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.dfgLogo?.url}`}
                    alt={content?.dfgLogo?.alternativeText}
                    width={390}
                    height={50}
                    unoptimized
                  />
                </div>
              </a>
            </div>
            <div role="listitem">
              <a
                href={content.kitLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Karlsruher Institut für Technologie"
                className="transition-transform duration-300 hover:shadow-lg">
                <div className="transition-all duration-300 ease-in-out hover:scale-105">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.kitLogo?.url}`}
                    alt={content?.kitLogo?.alternativeText}
                    width={160}
                    height={80}
                    unoptimized
                  />
                </div>
              </a>
            </div>
            <div role="listitem">
              <a
                href={content.bwLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baden-Württemberg"
                className="transition-transform duration-300 hover:shadow-lg">
                <div className="transition-all duration-300 ease-in-out hover:scale-105">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.bwLogo?.url}`}
                    alt={content?.bwLogo?.alternativeText}
                    width={183}
                    height={100}
                    unoptimized
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <div
          className="flex flex-wrap items-center justify-center gap-4 text-center text-base"
          role="navigation"
          aria-label="Social Media Links">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <a
              href={content.youtubeLink}
              aria-label={`Visit Chemotion ${content.youtubeText} channel`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.youtubeLogo?.url}`}
                alt={content?.youtubeLogo?.alternativeText}
                width={30}
                height={30}
                className="dark:invert"
                unoptimized
              />
              <span className="text-sm md:text-base">{content.youtubeText}</span>
            </a>
            <a
              href={content.instagramLink}
              aria-label={`Visit Chemotion ${content.instagramText} profile`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.instagramLogo?.url}`}
                alt={content?.instagramLogo?.alternativeText}
                width={30}
                height={30}
                className="dark:invert"
                unoptimized
              />
              <span className="text-sm md:text-base">{content.instagramText}</span>
            </a>
            <a
              href={content.linkedinLink}
              aria-label={`Visit Chemotion ${content.linkedinText} profile`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.linkedinLogo?.url}`}
                alt={content?.linkedinLogo?.alternativeText}
                width={30}
                height={30}
                className="dark:invert"
                unoptimized
              />
              <span className="text-sm md:text-base">{content.linkedinText}</span>
            </a>
            <a
              href={content.repoLink}
              aria-label={`Visit Chemotion ${content.repoText} website`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.repoLogo?.url}`}
                alt={content?.repoLogo?.alternativeText}
                width={30}
                height={30}
                className="dark:invert"
                unoptimized
              />
              <span className="text-sm md:text-base">{content.repoText}</span>
            </a>
            <a
              href={content.elncodeLink}
              aria-label={`Visit Chemotion ${content.elncodeText} on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:underline sm:flex-row">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.elncodeLogo?.url}`}
                alt={content?.elncodeLogo?.alternativeText}
                width={30}
                height={30}
                className="dark:invert"
                unoptimized
              />

              <span className="text-sm md:text-base">{content.elncodeText}</span>
            </a>
          </div>
        </div>

        <hr className="my-4 border-gray-300" aria-hidden="true" />
        <div className="flex flex-wrap items-center justify-center gap-4 text-center text-base">
          <p className="m-0">
            {content.copyrightText}&nbsp;
            <Link
              href={content.kitLink}
              aria-label="Visit KIT website"
              className="hover:underline"
              rel="noopener noreferrer"
              target="_blank">
              {content.copyrightLinkText}
            </Link>
          </p>
          <span aria-hidden="true" className="mx-2">
            |
          </span>
          <Link href={content.homeLink} aria-label="Visit Chemotion Home page" className="hover:underline">
            {content.homeText}
          </Link>
          <span aria-hidden="true" className="mx-2">
            |
          </span>
          <Link href={content.accessibilityLink} aria-label="View Accessibility Statement" className="hover:underline">
            {content.accessibilityText}
          </Link>
          <span aria-hidden="true" className="mx-2">
            |
          </span>
          <Link href={content.privacyLink} aria-label="View Privacy Policy" className="hover:underline">
            {content.privacyText}
          </Link>
          <span aria-hidden="true" className="mx-2">
            |
          </span>
          <Link href={content.imprintLink} aria-label="View Imprint section" className="hover:underline">
            {content.imprintText}
          </Link>
          <span aria-hidden="true" className="ml-2">
            |
          </span>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
