'use client';

import jsPDF from 'jspdf';
import useContent from '@/hooks/useContent';
import HeroButton from '@/components/ui/HeroButton';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const formatFeatures = (blocks) => {
  const groups = [];
  let currentGroup = null;
  blocks.forEach((block) => {
    if (block.type === 'paragraph') {
      const text = block.children
        .map((child) => child.text)
        .join(' ')
        .trim();
      if (!text) return;
      if (block.children[0]?.bold) {
        if (currentGroup) groups.push(currentGroup);
        currentGroup = { title: text, items: [] };
      }
    } else if (block.type === 'list') {
      if (currentGroup) {
        block.children.forEach((item) => {
          const itemText = item.children.map((child) => child.text).join(' ');
          currentGroup.items.push(itemText);
        });
      }
    }
  });
  if (currentGroup) groups.push(currentGroup);
  return groups;
};

const estimateGroupWeight = (group, avgCharsPerLine = 30) => {
  const titleLines = Math.ceil(group.title.length / avgCharsPerLine);
  let itemLines = 0;
  group.items.forEach((item) => {
    itemLines += Math.ceil(item.length / avgCharsPerLine);
  });
  return titleLines + itemLines;
};

const canPartition = (weights, k, maxAllowed) => {
  let count = 1,
    currentSum = 0;
  for (const w of weights) {
    if (currentSum + w > maxAllowed) {
      count++;
      currentSum = w;
      if (count > k) return false;
    } else {
      currentSum += w;
    }
  }
  return true;
};

const partitionGroups = (groups, k, avgCharsPerLine = 30) => {
  const weights = groups.map((group) => estimateGroupWeight(group, avgCharsPerLine));
  const n = weights.length;
  if (n === 0) return Array.from({ length: k }, () => []);

  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b, 0);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (canPartition(weights, k, mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  const optimalMax = low;

  const partitions = [];
  let currentPartition = [];
  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    if (currentSum + weights[i] > optimalMax && partitions.length < k - 1) {
      partitions.push(currentPartition);
      currentPartition = [];
      currentSum = 0;
    }
    currentPartition.push(groups[i]);
    currentSum += weights[i];
  }
  partitions.push(currentPartition);
  while (partitions.length < k) {
    partitions.push([]);
  }
  return partitions;
};

const distributeColumnsSequentially = (groups, numColumns) => {
  const columns = [];
  const perColumn = Math.ceil(groups.length / numColumns);
  for (let i = 0; i < numColumns; i++) {
    columns.push(groups.slice(i * perColumn, (i + 1) * perColumn));
  }
  return columns;
};

const FeatureSection = () => {
  const { content, isLoading } = useContent({
    apiKey: 'features-section',
    fallbackKey: 'featuresSection'
  });

  if (isLoading) return <LoadingAnimation />;

  const groups = content?.features ? formatFeatures(content.features) : [];

  const frontendColumns = groups ? partitionGroups(groups, 3) : [];
  const pdfColumns = groups ? distributeColumnsSequentially(groups, 2) : [];

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
    doc.text(content?.generatedPDFTitleText, marginLeft + 5, yPosition + 17, { align: 'left' });

    // right logo
    const logoPath = `${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.logo?.url}`;

    doc.addImage(logoPath, 'PNG', pageWidth - marginRight - logoWidth - 20, yPosition - 28, logoWidth, logoHeight);
    yPosition += 35;

    // description
    const description = content?.generatedPDFDescription;
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

    // two columns
    const numColumns = 2;
    const columnGap = 10;
    const columnWidth = (contentWidth - (numColumns - 1) * columnGap) / numColumns;

    for (let col = 0; col < numColumns; col++) {
      let colX = marginLeft + col * (columnWidth + columnGap);
      let colY = yPosition;
      pdfColumns[col].forEach((group) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(36, 149, 207);
        const titleLines = doc.splitTextToSize(group.title, columnWidth - 20);
        const itemsText = group.items.map((item) => '\u2022 ' + item).join('\n');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(31, 41, 55);
        const itemLines = doc.splitTextToSize(itemsText, columnWidth - 20);

        const groupHeight = titleLines.length * actualLineHeight + itemLines.length * actualLineHeight + 20;

        doc.setFillColor(200, 217, 240);
        doc.rect(colX, colY, columnWidth, groupHeight, 'F');
        padding = 10;

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
    }
    doc.save('Chemotion-ELN-Features.pdf');
  };

  return (
    <div
      className="mb-14 w-full max-w-6xl px-4 text-gray-800 dark:text-darkForeground"
      role="region"
      aria-labelledby="feature-list-heading">
      <div
        className="rounded-md border-2 border-[#2495cf] p-12 dark:border-darkForeground"
        role="group"
        aria-labelledby="feature-list-heading">
        <h1 id="feature-list-heading" className="mb-8 text-center text-3xl font-bold" aria-label="Full Feature List">
          {content?.title}
        </h1>
        <div
          className="grid grid-cols-1 px-2 sm:mt-12 custom-lg:grid-cols-3 custom-lg:gap-14"
          role="list"
          aria-label="Feature columns">
          {frontendColumns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="mb-4 mt-2 space-y-6 sm:mb-0 sm:mt-12 custom-lg:mt-0"
              role="listitem"
              aria-label={`feature column ${colIndex}`}>
              {col.map((group, groupIndex) => (
                <div key={groupIndex} aria-labelledby={`feature-group-${colIndex}-${groupIndex}`}>
                  <h2 id={`feature-group-${colIndex}-${groupIndex}`} className="mb-2 text-base font-semibold">
                    {group.title}
                  </h2>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <HeroButton
            {...(content?.fileDownloadLink
              ? {
                  as: 'a',
                  href: content.fileDownloadLink,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }
              : { onClick: generatePDF })}
            aria-label="Download feature list as PDF"
            className=" w-60 border-2 border-[#2495cf] bg-[#2495cf] p-6 font-bold dark:border-darkForeground dark:bg-darkBackground">
            <div className="py-2 text-xl text-white">{content?.btnText}</div>
          </HeroButton>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
