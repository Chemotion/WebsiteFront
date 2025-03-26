'use client';

import useContent from '@/hooks/useContent';
import SectionCard from '@/components/ui/Card';

export default function RepositorySection() {
  const { content, isLoading } = useContent({
    apiKey: 'repository-section',
    fallbackKey: 'repositorySection'
  });

  return (
    <SectionCard
      content={content}
      isLoading={isLoading}
      sectionId="repositorycard"
      headingAria="Chemotion Repository Heading"
      buttonAria="Explore the Chemotion Repository documentation"
      featuresAria="Repository features"
      borderClass="border-gray-700"
      bgClass="bg-gray-700"
      leftSideClass=""
    />
  );
}
