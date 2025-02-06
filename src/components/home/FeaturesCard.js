'use client';

import jsPDF from 'jspdf';

const FeatureSection = () => {
  const features = [
    {
      column: 1,
      groups: [
        {
          title: 'Installation Benefits',
          items: ['Open-Source', 'Installation via Docker', 'Helpdesk and online documentation']
        },
        {
          title: 'User Administration',
          items: [
            'User management',
            'Roles and rights concept',
            'Administration of features, resources, and templates',
            'Device integration and management'
          ]
        },
        {
          title: 'Chemistry Specific Functions',
          items: [
            'Structure editors: Ketcher v1/v2, Chemdraw JS, Marvin [License may be required]',
            'Easy creation of samples, reactions, wellplates, screens, and research plans',
            'Calculation functions for chemicals',
            'Easy molecule import via CAS/SMILES',
            'Easy documentation of reaction variations',
            'Inventory feature',
            'ChemScanner to extract information from ChemDraw objects to machine readable format'
          ]
        }
      ]
    },
    {
      column: 2,
      groups: [
        {
          title: 'Multiple APIs',
          items: [
            'SciFinder: Search CAS for samples and reactions',
            'Easy export into Chemotion repository and RADAR4Chem',
            'PubChem: link information automatically to PubChem entries'
          ]
        },
        {
          title: 'Collaboration Features',
          items: ['Shareable/common workspaces', 'Comment functions', 'Calendar functions']
        },
        {
          title: 'Analytics',
          items: [
            'Device import integration from many vendors (Advion, Agilent, Bruker, Gamry, Horiba, Leica, Netzsch, Shimadzu, TA Instruments, Thermo Fisher)',
            'ChemConverter converts text readable files to common data type: jcamp .jdx,  .json',
            'ChemSpectra serves for the visualization and analysis of spectroscopic data and allows the analysis of data attached to a sample or reaction',
            'Integration of NMRium for 1D and 2D analysis'
          ]
        }
      ]
    },
    {
      column: 3,
      groups: [
        {
          title: 'Import/Export Options',
          items: ['Easy import/export of samples & collections', 'Structure import from sdf and xls']
        },
        {
          title: 'Search Functions',
          items: [
            'Extensive search functions for all entities',
            'Structure search as similarity and substructure search',
            'Text-based search'
          ]
        },
        {
          title: 'Lab Specials',
          items: [
            'Scanning/generating of BarCode & QR-Code',
            'Image Editing & Annotation of .png, .bmp, .tif, .svg and .jpeg.',
            'Manufacturer-independent scale integration via image processing per app'
          ]
        },
        {
          title: 'LabIMotion Extension',
          items: [
            'LabIMotion for generic elements',
            'Diverse templates included',
            'Metadata extraction from measurement data into dataset descriptions'
          ]
        }
      ]
    }
  ];

  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt');

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginLeft = 60;
    const marginRight = 60;
    const contentWidth = pageWidth - marginLeft - marginRight;
    const logoWidth = 90;
    const logoHeight = 54;
    let yPosition = 50;

    // title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(31, 41, 55);
    doc.text('Chemotion ELN', marginLeft + 5, yPosition + 17, { align: 'left' });

    // right logo
    const logoPath = 'images/chemotion-lg.png';
    doc.addImage(logoPath, 'PNG', pageWidth - marginRight - logoWidth - 20, yPosition - 28, logoWidth, logoHeight);
    yPosition += 35;

    // description
    const description =
      'With the Chemotion laboratory notebook you structure and digitalize your entire workflow in the laboratory. This starts with the planning and description of chemical experiments including the generation of samples with different functions and continues with the recording of all observations, and the analysis of especially analytical measurement data. Chemotion ELN provides the platform where you can collect, track and exchange all data in one place. Extensive import and export functions support you from the first step to publication.';
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    // line-height factor
    const lineHeightFactor = 1.3;
    const fontSize = doc.getFontSize();
    const actualLineHeight = fontSize * lineHeightFactor;
    var padding = 5;

    const textLines = doc.splitTextToSize(description, contentWidth - 20);

    const boxHeight = textLines.length * actualLineHeight + 1.5 * padding;

    doc.setFillColor(221, 230, 242);
    doc.rect(marginLeft, yPosition, contentWidth, boxHeight, 'F');

    doc.text(textLines, marginLeft + padding, yPosition + padding + actualLineHeight / 2, {
      lineHeightFactor
    });

    yPosition += boxHeight + 15;

    const columnGap = 10;
    const columnWidth = (contentWidth - columnGap) / 2;
    const columnSpacing = columnGap;
    let colX = marginLeft;
    let colY = yPosition;

    const allGroups = features.flatMap((column) => column.groups);
    const midIndex = Math.ceil(allGroups.length / 2);

    // two columns
    padding = 10;
    const leftColumnGroups = allGroups.slice(0, midIndex);
    const rightColumnGroups = allGroups.slice(midIndex);

    [leftColumnGroups, rightColumnGroups].forEach((columnGroups, columnIndex) => {
      colX = marginLeft + columnIndex * (columnWidth + columnSpacing);
      colY = yPosition;

      columnGroups.forEach((group) => {
        const titleLines = doc.splitTextToSize(group.title, columnWidth - 2.5 * padding);
        const itemLines = doc.splitTextToSize(
          group.items.map((item) => `\u2022  ${item}`).join('\n'),
          columnWidth - 2 * padding
        );

        const groupHeight = (titleLines.length + itemLines.length) * actualLineHeight + 2 * padding;

        doc.setFillColor(200, 217, 240);
        doc.rect(colX, colY, columnWidth, groupHeight, 'F');

        // title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(36, 149, 207);
        doc.text(titleLines, colX + padding, colY + padding + actualLineHeight / 2, {
          lineHeightFactor
        });

        // items
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(31, 41, 55);
        doc.text(itemLines, colX + padding, colY + padding + (titleLines.length + 1) * actualLineHeight, {
          lineHeightFactor
        });

        // update column position
        colY += groupHeight + 10;

        if (colY > pageHeight - 80) {
          doc.addPage();
          colY = yPosition;
        }
      });
    });

    doc.save('Chemotion-ELN-Features.pdf');
  };

  return (
    <div
      className="mb-14 w-full max-w-6xl px-4 text-gray-800 dark:text-darkForeground"
      role="region"
      aria-labelledby="feature-list-heading">
      <div
        className="rounded-md border-2 border-[#008ab8] p-12 dark:border-darkForeground"
        role="group"
        aria-labelledby="feature-list-heading">
        <h1 id="feature-list-heading" className="mb-8 text-center text-3xl font-bold" aria-label="Full Feature List">
          Full Feature List
        </h1>
        <div
          className="mt-12 grid grid-cols-1 px-2 custom-lg:grid-cols-3 custom-lg:gap-14"
          role="list"
          aria-label="Feature columns">
          {features.map((column, index) => (
            <div key={index} className="space-y-6" role="listitem" aria-labelledby={`feature-column-${index}`}>
              {column.groups.map((group, groupIndex) => (
                <div key={groupIndex} aria-labelledby={`feature-group-${index}-${groupIndex}`}>
                  <h2
                    id={`feature-group-${index}-${groupIndex}`}
                    className="mb-2 text-base font-semibold"
                    aria-label={group.title}>
                    {group.title}
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-sm" aria-label={`${group.title} items`}>
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} aria-label={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                {index === features.length - 1 && (
                  <button
                    onClick={generatePDF}
                    className="mt-2 inline-block rounded-md border-2 border-[#008ab8] bg-[#008ab8] px-8 py-3 text-center text-xl font-semibold text-white shadow-sm
                    transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:shadow-lg dark:border-darkForeground
                    dark:bg-darkBackground dark:hover:border-darkForeground"
                    aria-label="Download feature list as PDF">
                    Download as PDF
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
