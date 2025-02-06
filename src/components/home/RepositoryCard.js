'use client';

import useContent from '@/hooks/useContent';
import Card from '@/components/ui/Card';

export default function RepositorySection() {
  const { content, isLoading } = useContent({
    apiKey: 'repository-section',
    fallbackKey: 'repositorySection'
  });

  return (
    <Card
      content={content}
      isLoading={isLoading}
      sectionId="repositorycontent"
      headingId="repository-section-heading"
      headingAriaLabel="Chemotion Repository Heading"
      buttonAriaLabel="Explore the Chemotion Repository documentation"
      featuresAriaLabel="Repository features"
      borderColorClass="border-[#4d5559] dark:border-darkForeground"
      buttonBorderClass="border-[#4d5559] dark:border-darkForeground"
      buttonBackgroundClass="bg-[#4d5559] dark:bg-darkBackground"
      sectionClassName="mb-28 w-full max-w-6xl px-4"
      containerClassName="flex flex-col items-center justify-between overflow-hidden rounded-md p-6 lg:flex-row lg:items-stretch lg:p-6"
      leftSideClassName="flex-col justify-between space-y-6 text-center lg:mx-4 lg:flex lg:w-[45%] lg:p-4 lg:text-left"
      featuresContainerClassName="space-y-4 text-base text-gray-700 dark:text-darkForeground"
      imageWrapperClassName="relative mt-8 flex aspect-[3/2] w-full justify-center overflow-hidden rounded-md px-2 lg:my-2 lg:mr-2 lg:w-1/2 lg:justify-end lg:px-0"
    />
  );
}
