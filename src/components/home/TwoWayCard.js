'use client';

const GetStartedSection = () => {
  const features = [
    {
      columnTitle: 'Explore Admin Features',
      groups: [
        {
          title: 'Manage advanced features',
          items: ['Curate Text and Report Templates', 'Generic Elements and Datasets', 'Structure Editors']
        },
        {
          title: 'Manage users, groups and devices',
          items: [
            'Lock, unlock, delete and restore user accounts',
            'Reset forgotten passwords',
            'Remote desktop features'
          ]
        },
        {
          title: 'Monitor disk usage',
          items: []
        }
      ],
      button: {
        text: 'Documentation',
        link: 'https://chemotion.net/docs/eln'
      }
    },
    {
      columnTitle: 'Install and Manage Chemotion',
      groups: [
        {
          title: 'Use our helper toolkit ChemCLI',
          items: [
            'Deploy, manage and backup instance(s) of Chemotion ELN',
            'Manage users',
            'Access shell, ruby and database consoles'
          ]
        },
        {
          title: 'Go beyond the scenes',
          items: ['Use full power of our containerized distribution', 'Use our nginx guide to setup reverse proxy']
        },
        {
          title: 'Use our API',
          items: ['To access the ELN data programmatically', 'Push attachments to the ELN']
        }
      ],
      button: {
        text: 'Get Started!',
        link: 'https://chemotion.net/docs/eln/install_configure'
      }
    }
  ];

  return (
    <div id="explore" className="mb-16 w-full max-w-6xl px-4" role="region" aria-labelledby="explore-section-heading">
      <div className="flex flex-col items-stretch gap-14 sm:flex-row">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col justify-between rounded-md border-2 border-[#008ab8] p-12 text-gray-800"
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
            <div className="mt-6">
              <a
                href={feature.button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border-2 border-[#008ab8] bg-[#008ab8] px-8 py-3 text-center text-xl font-semibold
                text-white shadow-sm transition-all duration-300 hover:border-gray-800 hover:bg-gray-800
                hover:shadow-lg"
                aria-label={`Learn more about ${feature.columnTitle}`}>
                {feature.button.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedSection;
