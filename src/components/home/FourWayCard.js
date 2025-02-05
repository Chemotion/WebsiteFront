'use client';

import useContent from '@/hooks/useContent';
import Card from '@/components/ui/QuadCard';

export default function CardContainer() {
  const { content, isLoading } = useContent({
    apiKey: 'eln-four-steps-sections',
    fallbackKey: 'elnFourStepsSection'
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!content || !Array.isArray(content)) {
    return <div>No data found for ElnFourStepsSection.</div>;
  }

  // custom order
  const order = ['Plan', 'Collect', 'Analyse', 'Publish'];
  const sortedContent = content.sort((a, b) => order.indexOf(a.title) - order.indexOf(b.title));

  return (
    <div className="mb-14 w-full max-w-6xl px-4" role="region" aria-labelledby="card-container-heading">
      <h2 id="card-container-heading" className="sr-only">
        ELN Four Steps
      </h2>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        {sortedContent.map((card, index) => {
          const imageUrl = card.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${card.image.url}` : null;

          return (
            <section
              id={card.title?.toLowerCase()}
              key={index}
              className="w-full"
              aria-labelledby={`${card.title}-heading`}>
              <Card
                title={card.title}
                description={card.subtitle}
                image={imageUrl}
                longDescription={card.features}
                borderColor="#008ab8"
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
