'use client';

import jsPDF from 'jspdf';

const FeatureSection = () => {
  const features = [
    {
      column: 1,
      groups: [
        {
          title: 'Lab Specials',
          items: [
            'Scanning/generating of BarCode & QR-Code',
            'Image Editing & Annotation of .png, .bmp, .tif, .svg and .jpeg.',
            'Manufacturer-independent scale integration via image processing per app'
          ]
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
      column: 2,
      groups: [
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
        },
        {
          title: 'Multiple APIs',
          items: [
            'SciFinder: Search CAS for samples and reactions',
            'Easy export into Chemotion repository and RADAR4Chem',
            'PubChem: link information automatically to PubChem entries'
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
    },
    {
      column: 3,
      groups: [
        {
          title: 'Import/Export Options',
          items: ['Easy import/export of samples & collections', 'Structure import from sdf and xls']
        },
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
          title: 'Collaboration Features',
          items: ['Shareable/common workspaces', 'Comment functions', 'Calendar functions']
        }
      ]
    }
  ];

  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt');

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginLeft = 40;
    const marginRight = 40;
    const maxLineWidth = pageWidth - marginLeft - marginRight;
    let yPosition = 80;

    const addHeaderFooter = (pageNum) => {
      doc.setFontSize(10);
      doc.setFont(undefined, 'italic');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const marginRight = 40;
      doc.text(`Page ${pageNum}`, pageWidth - marginRight, pageHeight - 30, { align: 'right' });
    };

    let pageNum = 1;
    addHeaderFooter(pageNum);

    doc.setFont('helvetica', 'normal');

    doc.setFontSize(22);
    doc.setFont(undefined, 'bold');
    doc.text('Chemotion ELN Features', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 40;

    features.forEach((column) => {
      column.groups.forEach((group) => {
        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.text(group.title, marginLeft, yPosition);
        yPosition += 20;

        group.items.forEach((item) => {
          doc.setFontSize(12);
          doc.setFont(undefined, 'normal');

          const textLines = doc.splitTextToSize(`• ${item}`, maxLineWidth);
          doc.text(textLines, marginLeft + 10, yPosition);
          yPosition += textLines.length * 15;

          if (yPosition > pageHeight - 80) {
            doc.addPage();
            yPosition = 80;
            pageNum += 1;
            addHeaderFooter(pageNum);
          }
        });

        yPosition += 15;

        if (yPosition > pageHeight - 80) {
          doc.addPage();
          yPosition = 80;
          pageNum += 1;
          addHeaderFooter(pageNum);
        }
      });
    });

    doc.save('Chemotion-ELN-Features.pdf');
  };

  return (
    <div className="px-4 mb-16 max-w-6xl w-full">
      <div className="border-2 border-[#008ab8] p-12 bg-[#F6F6F6] rounded-lg">
        <h1 className="text-3xl text-gray-800 font-bold text-center mb-8">Full Feature List</h1>
        <div className="grid grid-cols-1 custom-lg:grid-cols-3 gap-20 px-2 mt-12">
          {features.map((column, index) => (
            <div key={index} className="space-y-6">
              {column.groups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h2 className="text-base text-gray-700 font-semibold mb-2">{group.title}</h2>
                  <ul className="list-disc text-sm pl-5 space-y-2 text-gray-600">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                {index === features.length - 1 && (
                  <button
                    onClick={generatePDF}
                    className="mt-8 inline-block px-8 py-3 text-center text-xl text-[#F6F6F6] bg-[#008ab8] rounded-lg font-semibold border-2
                    border-[#008ab8] shadow-sm transition-all duration-300 hover:bg-gray-800 hover:border-gray-800
                    hover:shadow-lg ">
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
