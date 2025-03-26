'use client';

import useContent from '@/hooks/useContent';
import SectionCard from '@/components/ui/Card';

export default function DemoSection() {
  const { content, isLoading } = useContent({
    apiKey: 'demo-section',
    fallbackKey: 'demoSection'
  });

  return (
    <SectionCard
      content={content}
      isLoading={isLoading}
      sectionId="demo"
      headingAria="ELN Demo Heading"
      buttonAria="Visit the Chemotion ELN Demo documentation page"
      featuresAria="ELN Demo description"
      borderClass="border-[#008ab8]"
      bgClass="bg-[#008ab8]"
      leftSideClass="lg:py-10"
    />
  );
}
