'use client';

import useContent from '@/hooks/useContent';
import SubHero from '@/components/ui/SubHero';

export default function ELNHero() {
  const { content, isLoading } = useContent({
    apiKey: 'eln-hero-section',
    fallbackKey: 'elnHero'
  });

  return <SubHero sectionId="eln" textClass="text-[#008ab8]" content={content} isLoading={isLoading} />;
}
