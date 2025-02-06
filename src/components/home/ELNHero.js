'use client';

import useContent from '@/hooks/useContent';
import SubHero from '@/components/ui/SubHero';

export default function ELNHero() {
  const { content, isLoading } = useContent({
    apiKey: 'eln-hero-section',
    fallbackKey: 'elnHero'
  });

  return (
    <SubHero
      heroId="eln"
      headingId="eln-hero-heading"
      headingAriaLabel="Start your journey with the most chemical of all ELNs"
      containerAriaLabelledby="eln-hero-heading"
      textColorClass="text-[#008ab8] dark:text-darkForeground"
      containerClassName="relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center"
      titleClassName="text-center text-4xl"
      content={content}
      isLoading={isLoading}
    />
  );
}
