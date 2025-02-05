'use client';

import useContent from '@/hooks/useContent';
import SubHero from '@/components/ui/SubHero';

export default function LabimotionHero() {
  const { content, isLoading } = useContent({
    apiKey: 'labimotion-section',
    fallbackKey: 'labimotionSection'
  });

  return (
    <SubHero
      heroId="labimotion"
      headingId="labimotion-hero-heading"
      headingAriaLabel="Out of Chemistry. Generic Elements for Life Sciences"
      containerAriaLabelledby="labimotion-hero-heading"
      textColorClass="text-[#e63946]"
      containerClassName="relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center"
      titleClassName="text-center text-4xl"
      content={content}
      isLoading={isLoading}
    />
  );
}
