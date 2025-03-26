'use client';

import useContent from '@/hooks/useContent';
import SubHero from '@/components/ui/SubHero';

export default function LabimotionHero() {
  const { content, isLoading } = useContent({
    apiKey: 'labimotion-section',
    fallbackKey: 'labimotionSection'
  });

  return <SubHero sectionId="labimotion" textClass="text-[#e63946]" content={content} isLoading={isLoading} />;
}
