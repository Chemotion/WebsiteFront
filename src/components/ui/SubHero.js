'use client';

import { motion } from 'framer-motion';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function SubHero({
  heroId,
  headingId,
  headingAriaLabel,
  containerAriaLabelledby,
  textColorClass = 'text-[#008ab8]',
  containerClassName = 'relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center',
  titleClassName = 'text-center text-4xl',

  content,
  isLoading
}) {
  if (isLoading) {
    return <LoadingAnimation />;
  }

  const heroTitle = content?.heroTitle || [];

  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id={heroId}
      className={`${textColorClass} ${containerClassName}`}
      whileHover="hover"
      role="region"
      aria-labelledby={containerAriaLabelledby}>
      <h1 id={headingId} className={titleClassName} aria-label={headingAriaLabel}>
        {heroTitle.map((paragraph, idx) => (
          <span key={idx}>
            {paragraph.children.map((child, childIdx) =>
              child.bold ? (
                <motion.span
                  key={childIdx}
                  className="inline-block font-bold"
                  variants={{ hover: hoverEffect }}
                  transition={{ type: 'spring', stiffness: 500 }}>
                  {child.text}
                </motion.span>
              ) : (
                <span key={childIdx}>{child.text}</span>
              )
            )}
          </span>
        ))}
      </h1>
    </motion.div>
  );
}
