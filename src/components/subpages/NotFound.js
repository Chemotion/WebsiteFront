'use client';

import Image from 'next/image';
import { HeroButton } from '@/components/ui/HeroButton';
import useContent from '@/hooks/useContent';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function NotFoundPage() {
  const { content, isLoading } = useContent({
    apiKey: 'not-found-page',
    fallbackKey: 'notFoundPage'
  });

  if (isLoading) return <LoadingAnimation />;

  const { mainText, subText, buttonText, buttonLink, logo } = content;

  return (
    <div className="mx-auto mb-20 mt-10 max-w-4xl p-4 text-center" role="main" aria-labelledby="not-found-title">
      <div className="mb-12">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo?.url}`}
          alt={logo?.alternativeText}
          width={500}
          height={Math.round(logo?.height * (500 / logo?.width))}
          unoptimized
          className="mx-auto"
        />
      </div>
      <section className="mb-12">
        <h1 id="not-found-title" className="text-5xl font-extrabold leading-normal" aria-label={mainText}>
          {mainText}
        </h1>
        <p className="mt-4 text-lg" aria-label="Explanation that the page is not found">
          {subText}
        </p>
      </section>
      <HeroButton
        as="a"
        href={buttonLink}
        aria-label="Go back to home page"
        className="w-48 border-2 border-[#008ab8] bg-[#008ab8] font-semibold dark:border-darkForeground dark:bg-darkBackground">
        <div className="py-2 text-xl text-white">{buttonText}</div>
      </HeroButton>
    </div>
  );
}
