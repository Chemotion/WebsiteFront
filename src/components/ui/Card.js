import Image from 'next/image';
import { HeroButton } from '@/components/ui/HeroButton';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function SectionCard({
  content,
  isLoading,
  sectionId,
  headingAria,
  buttonAria,
  featuresAria,
  borderClass,
  bgClass,
  leftSideClass
}) {
  if (isLoading) return <LoadingAnimation />;

  return (
    <section id={sectionId} className="mb-14 w-full max-w-6xl px-4" aria-labelledby={`${sectionId}-heading`}>
      <div
        className={`flex flex-col items-center justify-between overflow-hidden rounded-md border-2 p-6 dark:border-darkForeground lg:flex-row lg:items-stretch lg:p-6 ${borderClass}`}>
        <div
          className={`flex-col justify-between space-y-6 text-center lg:mx-4 lg:flex lg:w-[45%] lg:p-4 lg:text-left ${leftSideClass}`}>
          <h1
            id={`${sectionId}-heading`}
            className="text-[26px] font-bold text-gray-800 dark:text-darkForeground"
            aria-label={headingAria}>
            {content?.titleImage?.url ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content.titleImage.url}`}
                alt={content?.titleImage?.alternativeText || 'Heading image'}
                width={300}
                height={Math.round(content.titleImage?.height * (300 / content.titleImage?.width))}
                className="mx-auto mb-2 lg:mx-0"
                unoptimized
              />
            ) : (
              content?.title || 'No Title'
            )}
          </h1>
          <div
            className="space-y-4 text-base text-gray-700 dark:text-darkForeground"
            role="list"
            aria-label={featuresAria}>
            {content.features?.map((feature, index) => (
              <div
                key={index}
                className="transition-all duration-200 hover:text-gray-900 dark:hover:text-darkForeground"
                role="listitem"
                aria-label={feature?.children?.map((child) => child?.text).join(' ') || ''}>
                {feature?.children?.map((child, childIndex) => (
                  <span
                    key={childIndex}
                    className={[child.bold ? 'font-semibold' : '', child.italic ? 'italic' : ''].join(' ')}>
                    {child.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            {content.buttonUrl && content.buttonText && (
              <HeroButton
                as="a"
                href={content.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={buttonAria}
                className={[
                  'p-6 w-52 dark:border-2 dark:border-darkForeground dark:bg-darkBackground',
                  borderClass,
                  bgClass
                ].join(' ')}>
                <div className="py-2 text-xl text-white"> {content?.buttonText}</div>
              </HeroButton>
            )}
          </div>
        </div>

        <div
          className={`relative mt-8 flex aspect-[3/2] w-full justify-center overflow-hidden rounded-md border-2 px-2 dark:border-darkForeground lg:my-2 lg:mr-2 lg:w-1/2 lg:justify-end lg:px-0 ${borderClass}`}
          aria-hidden="true">
          {content?.image?.url ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content.image.url}`}
              alt={content?.image?.alternativeText || `Visual representation of ${content?.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300"
              unoptimized
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-gray-200">
              <span className="text-xl font-bold text-gray-600">No Image</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
