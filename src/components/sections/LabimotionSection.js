'use client';

import Image from 'next/image';
import useSWR from 'swr';
import fallback from '/public/fallback.json';

const fetcher = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/labimotion-section?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const RepositorySection = () => {
  const { data, error, isLoading } = useSWR('labimotion-section', fetcher);

  const fallbackContent = fallback.labimotionSection;
  if (isLoading) return <div>Loading...</div>;

  const content = !error && data?.data ? data.data : fallbackContent;

  return (
    <section
      id="labimotioncontent"
      className="mb-16 w-full max-w-6xl px-4"
      aria-labelledby="labimotion-section-heading">
      <div className="flex flex-col items-center justify-between overflow-hidden rounded-md border-2 border-[#e63946] p-6 lg:flex-row lg:items-stretch lg:p-6">
        <div className="flex-col justify-between space-y-6 text-center lg:mx-4 lg:flex lg:w-[45%] lg:p-4 lg:text-left">
          <h1
            id="labimotion-section-heading"
            className="text-[26px] font-bold text-gray-800"
            aria-label="LabIMotion Heading">
            {content?.titleImage?.url ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content.titleImage.url}`}
                alt={content?.titleImage?.alternativeText || 'LabIMotion Logo'}
                width={300}
                height={46}
                className="mx-auto mb-2 h-[46px] w-[300px] object-contain lg:mx-0"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-gray-200">
                <span className="text-xl font-bold text-gray-600">No Image</span>
              </div>
            )}
          </h1>
          <div className="space-y-4 text-base text-gray-700" aria-label="LabIMotion features">
            {content?.features?.map((feature, index) => (
              <div
                key={index}
                className="transition-all duration-200 hover:text-gray-900"
                role="listitem"
                aria-label={feature?.children?.map((child) => child?.text).join(' ') || ''}>
                {feature?.children?.map((child, childIndex) => (
                  <span
                    key={childIndex}
                    className={`${child.bold ? 'font-semibold' : ''} ${child.italic ? 'italic' : ''}`}>
                    {child.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href={content?.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border-2 border-[#e63946] bg-[#e63946] px-8 py-3 text-center text-xl font-semibold
              text-white shadow-sm transition-all duration-300 hover:border-gray-800 hover:bg-gray-800
              hover:shadow-lg"
              aria-label="Explore LabIMotion documentation">
              {content?.buttonText}
            </a>
          </div>
        </div>
        <div
          className="relative mt-8 flex aspect-[3/2] w-full justify-center overflow-hidden rounded-md border-2 border-[#e63946] px-2 lg:my-2 lg:mr-2 lg:w-1/2 lg:justify-end lg:px-0"
          aria-hidden="true">
          {content?.image?.url ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content.image.url}`}
              alt={content?.image?.alternativeText || `Visual representation of LabIMotion`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300"
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
};

export default RepositorySection;
