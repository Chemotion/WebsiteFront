'use client';

import useContent from '@/hooks/useContent';
import SectionCard from '@/components/ui/Card';

export default function DeviceSection() {
  const { content, isLoading } = useContent({
    apiKey: 'device-section',
    fallbackKey: 'deviceSection'
  });

  return (
    <SectionCard
      content={content}
      isLoading={isLoading}
      sectionId="deviceintegration"
      headingAria="Device Integration Heading"
      buttonAria="Visit the Chemotion ELN Device Integration documentation page"
      featuresAria="Device integration features"
      borderClass="border-[#008ab8]"
      bgClass="bg-[#008ab8]"
      leftSideClass=""
    />
  );
}
