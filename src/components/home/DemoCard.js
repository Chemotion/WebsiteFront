'use client';

import useContent from '@/hooks/useContent';
import Card from '@/components/ui/Card';

export default function DemoSection() {
  const { content, isLoading } = useContent({
    apiKey: 'demo-section',
    fallbackKey: 'demoSection'
  });

  return (
    <Card
      content={content}
      isLoading={isLoading}
      sectionId="democontent"
      headingId="demo-heading"
      headingAriaLabel="ELN Demo Heading"
      buttonAriaLabel="Visit the Chemotion ELN Demo documentation page"
      featuresAriaLabel="ELN Demo description"
      borderColorClass="border-[#008ab8]"
      buttonBorderClass="border-[#008ab8]"
      buttonBackgroundClass="bg-[#008ab8]"
      sectionClassName="mb-14 w-full max-w-6xl px-4"
      containerClassName="flex flex-col items-center justify-between overflow-hidden rounded-md p-6 lg:flex-row lg:items-stretch lg:p-6"
      leftSideClassName="flex-col justify-between space-y-6 text-center lg:mx-4 lg:flex lg:w-[45%] lg:p-4 lg:py-10 lg:text-left"
      featuresContainerClassName="space-y-4 text-base text-gray-700"
      imageWrapperClassName="relative mt-8 flex aspect-[3/2] w-full justify-center overflow-hidden rounded-md px-2 lg:my-2 lg:mr-2 lg:w-1/2 lg:justify-end lg:px-0"
    />
  );
}
