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
    <div id="explore" className="px-4 mb-16 max-w-6xl w-full" role="region" aria-labelledby="explore-section-heading">
      <div className="flex flex-col sm:flex-row gap-14 items-stretch">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-2 text-gray-800 border-[#008ab8] p-12 bg-[#F6F6F6] rounded-md flex flex-col justify-between flex-1"
            role="group"
            aria-labelledby={`feature-column-${index}-title`}>
            <div>
              <h2
                id={`feature-column-${index}-title`}
                className="text-2xl font-bold"
                tabIndex="0"
                aria-label={feature.columnTitle}>
                {feature.columnTitle}
              </h2>
              <div className="space-y-2 mt-8">
                {feature.groups.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <h3 className="text-base font-semibold mb-2" tabIndex="0" aria-label={group.title}>
                      {group.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1" role="list" aria-label={`${group.title} items`}>
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} role="listitem" tabIndex="0" aria-label={item}>
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
                className="inline-block px-8 py-3 text-center text-xl text-white bg-[#008ab8] rounded-md font-semibold border-2
                border-[#008ab8] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
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
