'use client';
import HeroButton from '@/components/ui/HeroButton';
import useContent from '@/hooks/useContent';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const GetStartedSection = () => {
  const { content, isLoading } = useContent({
    apiKey: 'two-cards-section',
    fallbackKey: 'twoCardsSection'
  });

  if (isLoading) return <LoadingAnimation />;

  const parseCard = (card, buttonText, buttonLink) => {
    const columnTitle = card.find((item) => item.type === 'heading' && item.level === 1)?.children[0].text || '';

    const groups = [];
    for (let i = 0; i < card.length; i++) {
      if (card[i].type === 'heading' && card[i].level === 3) {
        const groupTitle = card[i].children[0].text;
        let items = [];
        if (i + 1 < card.length && card[i + 1].type === 'list') {
          items = card[i + 1].children.map((listItem) => listItem.children[0].text);
          i++;
        }
        groups.push({ title: groupTitle, items });
      }
    }
    return { columnTitle, groups, button: { text: buttonText, link: buttonLink } };
  };

  const features = [
    parseCard(content.exploreCard, content.exploreButtonText, content.exploreButtonLink),
    parseCard(content.installCard, content.installButtonText, content.installButtonLink)
  ];

  return (
    <div id="explore" className="mb-14 w-full max-w-6xl px-4" role="region" aria-labelledby="explore-section-heading">
      <div className="flex flex-col items-stretch gap-14 sm:flex-row">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col justify-between rounded-md border-2 border-[#008ab8] p-12 text-gray-800 dark:border-darkForeground dark:text-darkForeground"
            role="group"
            aria-labelledby={`feature-column-${index}-title`}>
            <div>
              <h2 id={`feature-column-${index}-title`} className="text-2xl font-bold" aria-label={feature.columnTitle}>
                {feature.columnTitle}
              </h2>
              <div className="mt-8 space-y-2">
                {feature.groups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h3 className="mb-2 text-base font-semibold" aria-label={group.title}>
                      {group.title}
                    </h3>
                    <ul className="list-disc space-y-1 pl-5" aria-label={`${group.title} items`}>
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} aria-label={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <HeroButton
                as="a"
                href={feature.button.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more about ${feature.columnTitle}`}
                className="size-auto w-52 border-2 border-[#008ab8] bg-[#008ab8] p-6 font-bold dark:border-darkForeground dark:bg-darkBackground">
                <div className="py-2 text-xl text-white">{feature.button.text}</div>
              </HeroButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedSection;
