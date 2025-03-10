import Image from 'next/image';
import { HeroButton } from '@/components/ui/HeroButton';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function SectionCard({
  sectionId,
  headingId,
  headingAriaLabel,
  buttonAriaLabel,
  borderColorClass = 'border-[#008ab8]',
  buttonBorderClass = 'border-[#008ab8]',
  buttonBackgroundClass = 'bg-[#008ab8]',
  sectionClassName = 'mb-14 w-full max-w-6xl px-4',
  containerClassName = 'flex flex-col items-center justify-between overflow-hidden rounded-md p-6 lg:flex-row lg:items-stretch lg:p-6',
  leftSideClassName = 'flex-col justify-between space-y-6 text-center lg:mx-4 lg:flex lg:w-[45%] lg:p-4 lg:text-left',
  featuresContainerClassName = 'space-y-4 text-base text-gray-700',
  featuresAriaLabel = '',
  imageWrapperClassName = 'relative mt-8 flex aspect-[3/2] w-full justify-center overflow-hidden rounded-md px-2 lg:my-2 lg:mr-2 lg:w-1/2 lg:justify-end lg:px-0',
  content,
  isLoading
}) {
  if (isLoading) return <LoadingAnimation />;

  return (
    <section id={sectionId} className={sectionClassName} aria-labelledby={headingId}>
      <div className={`border-2 ${borderColorClass} ${containerClassName}`}>
        <div className={leftSideClassName}>
          <h1
            id={headingId}
            className="text-[26px] font-bold text-gray-800 dark:text-darkForeground"
            aria-label={headingAriaLabel}>
            {content?.titleImage?.url ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content.titleImage.url}`}
                alt={content?.titleImage?.alternativeText || 'Heading image'}
                width={300}
                height={46}
                className="mx-auto mb-2 h-[46px] w-[300px] object-contain lg:mx-0"
                unoptimized
              />
            ) : (
              content?.title || 'No Title'
            )}
          </h1>

          <div className={featuresContainerClassName} role="list" aria-label={featuresAriaLabel}>
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
                aria-label={buttonAriaLabel}
                className={[
                  'p-6 w-52 dark:border-2 dark:border-darkForeground',
                  buttonBorderClass,
                  buttonBackgroundClass
                ].join(' ')}>
                <div className="py-2 text-xl text-white"> {content?.buttonText}</div>
              </HeroButton>
            )}
          </div>
        </div>

        <div className={[`border-2 ${borderColorClass}`, imageWrapperClassName].join(' ')} aria-hidden="true">
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
