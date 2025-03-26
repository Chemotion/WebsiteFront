'use client';

import useContent from '@/hooks/useContent';
import SectionCard from '@/components/ui/Card';

export default function LabimotionSection() {
  const { content, isLoading } = useContent({
    apiKey: 'labimotion-section',
    fallbackKey: 'labimotionSection'
  });

  return (
    <SectionCard
      content={content}
      isLoading={isLoading}
      sectionId="labimotioncard"
      headingAria="LabIMotion Heading"
      buttonAria="Explore LabIMotion documentation"
      featuresAria="LabIMotion features"
      borderClass="border-[#e63946]"
      bgClass="bg-[#e63946]"
      leftSideClass=""
    />
  );
}
