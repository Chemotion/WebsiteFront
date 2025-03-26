'use client';

import useContent from '@/hooks/useContent';
import SubHero from '@/components/ui/SubHero';

export default function RepositoryHero() {
  const { content, isLoading } = useContent({
    apiKey: 'repository-section',
    fallbackKey: 'repositorySection'
  });

  return <SubHero sectionId="repository" textClass="text-gray-800" content={content} isLoading={isLoading} />;
}
