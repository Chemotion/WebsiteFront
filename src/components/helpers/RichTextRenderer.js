import React from 'react';

const RichTextRenderer = ({ content }) => {
  const renderLeaf = (leaf, index) => {
    const parts = leaf.text.split('\n');
    const children = [];

    parts.forEach((part, i) => {
      if (part === '') {
        children.push(<span key={`${index}-empty-${i}`} className="block h-px" />);
      } else {
        children.push(part);
      }
      if (i !== parts.length - 1) {
        children.push(<br key={`${index}-br-${i}`} />);
      }
    });

    let formatted = children;
    if (leaf.bold) {
      formatted = <strong key={`bold-${index}`}>{formatted}</strong>;
    }
    if (leaf.italic) {
      formatted = <em key={`italic-${index}`}>{formatted}</em>;
    }
    if (leaf.underline) {
      formatted = <u key={`underline-${index}`}>{formatted}</u>;
    }
    if (leaf.strikethrough) {
      formatted = <s key={`strike-${index}`}>{formatted}</s>;
    }
    if (leaf.code) {
      formatted = (
        <code key={`code-${index}`} className="rounded bg-gray-100 px-1 py-0.5 text-black">
          {formatted}
        </code>
      );
    }
    return formatted;
  };

  const renderNode = (node, index) => {
    if (node.type === 'text') {
      return renderLeaf(node, index);
    }

    switch (node.type) {
      case 'heading': {
        const level = node.level || 1;
        let classes = '';

        if (level === 1) {
          classes = 'text-5xl font-extrabold leading-normal mb-6';
        } else if (level === 2) {
          classes = 'text-3xl font-bold leading-tight mb-4';
        } else {
          classes = 'text-2xl font-bold mt-12 mb-4';
        }
        return (
          <div key={index} className={classes}>
            {node.children && node.children.map((child, i) => renderNode(child, i))}
          </div>
        );
      }
      case 'paragraph': {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {node.children && node.children.map((child, i) => renderNode(child, i))}
          </p>
        );
      }
      case 'list': {
        const listClasses = 'mb-4 ml-8 ';
        if (node.format === 'ordered') {
          return (
            <ol key={index} className={`${listClasses} list-decimal`}>
              {node.children && node.children.map((child, i) => renderNode(child, i))}
            </ol>
          );
        }
        return (
          <ul key={index} className={`${listClasses} mb-8 mt-6 list-disc`}>
            {node.children && node.children.map((child, i) => renderNode(child, i))}
          </ul>
        );
      }
      case 'list-item': {
        return (
          <li key={index} className="my-4">
            {node.children && node.children.map((child, i) => renderNode(child, i))}
          </li>
        );
      }
      case 'link': {
        return (
          <a key={index} href={node.url} className="text-[#008ab8] hover:underline">
            {node.children && node.children.map((child, i) => renderNode(child, i))}
          </a>
        );
      }
      default:
        return null;
    }
  };

  return <div className="text-base">{content.pageContent.map((node, index) => renderNode(node, index))}</div>;
};

export default RichTextRenderer;
