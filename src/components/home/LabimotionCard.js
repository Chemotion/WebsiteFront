'use client';

import useContent from '@/hooks/useContent';
import Card from '@/components/ui/Card';

export default function LabimotionSection() {
  const { content, isLoading } = useContent({
    apiKey: 'labimotion-section',
    fallbackKey: 'labimotionSection'
  });

  return (
    <Card
      content={content}
      isLoading={isLoading}
      sectionId="labimotioncontent"
      headingId="labimotion-section-heading"
      headingAriaLabel="LabIMotion Heading"
      buttonAriaLabel="Explore LabIMotion documentation"
      featuresAriaLabel="LabIMotion features"
      borderColorClass="border-[#e63946] dark:border-darkForeground"
      buttonBorderClass="border-[#e63946] dark:border-darkForeground"
      buttonBackgroundClass="bg-[#e63946] dark:bg-darkBackground"
      sectionClassName="mb-16 w-full max-w-6xl px-4"
      containerClassName="flex flex-col items-center justify-between overflow-hidden rounded-md p-6 lg:flex-row lg:items-stretch lg:p-6"
      leftSideClassName="flex-col justify-between space-y-6 text-center lg:mx-4 lg:flex lg:w-[45%] lg:p-4 lg:text-left"
      featuresContainerClassName="space-y-4 text-base text-gray-700 dark:text-darkForeground"
      imageWrapperClassName="relative mt-8 flex aspect-[3/2] w-full justify-center overflow-hidden rounded-md px-2 lg:my-2 lg:mr-2 lg:w-1/2 lg:justify-end lg:px-0"
    />
  );
}
