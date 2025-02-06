'use client';

import useContent from '@/hooks/useContent';
import SubHero from '@/components/ui/SubHero';

export default function RepositoryHero() {
  const { content, isLoading } = useContent({
    apiKey: 'repository-section',
    fallbackKey: 'repositorySection'
  });

  return (
    <SubHero
      heroId="repository"
      headingId="repository-hero-heading"
      headingAriaLabel="Mission Completed. Streamlined process from Lab to Publication."
      containerAriaLabelledby="repository-hero-heading"
      textColorClass="text-gray-800 dark:text-darkForeground"
      containerClassName="relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center"
      titleClassName="text-center text-4xl"
      content={content}
      isLoading={isLoading}
    />
  );
}
