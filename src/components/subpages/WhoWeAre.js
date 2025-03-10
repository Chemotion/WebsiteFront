'use client';

import Image from 'next/image';
import useContent from '@/hooks/useContent';
import RichTextRenderer from '@/components/helpers/RichTextRenderer';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function WhoWeArePage() {
  const { content, isLoading } = useContent({
    apiKey: 'about-page',
    fallbackKey: 'aboutPage'
  });

  if (isLoading) return <LoadingAnimation />;

  return (
    <main className="mx-auto mb-20 mt-8 max-w-4xl p-4" role="main" aria-labelledby="who-we-are-title">
      <section className="mb-12">
        <RichTextRenderer content={{ pageContent: content.partOneContent }} />
      </section>

      <section className="mb-12">
        <RichTextRenderer content={{ pageContent: content.partTwoContent }} />
      </section>

      {content.partTwoImages && content.partTwoImages.length > 0 && (
        <section className="mb-12 flex flex-col space-y-10">
          {content.partTwoImages.map((img) => (
            <Image
              key={img.id}
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img?.url}`}
              alt={img.alternativeText}
              width={400}
              height={Math.round(img?.height * (400 / img?.width))}
              className="max-h-28 object-contain object-left"
              unoptimized
            />
          ))}
        </section>
      )}
      <section className="mb-12 scroll-mt-[90px]" id="source">
        <RichTextRenderer content={{ pageContent: content.partThreeContent }} />
      </section>

      <section className="mb-12 scroll-mt-[90px]" id="imprint">
        <RichTextRenderer content={{ pageContent: content.imprintContent }} />
      </section>
    </main>
  );
}
