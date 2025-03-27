import { motion } from 'framer-motion';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

export default function SubHero({ content, isLoading, sectionId, textClass }) {
  if (isLoading) {
    return <LoadingAnimation />;
  }

  const heroTitle = content?.heroTitle || [];
  const ariaLabelText = heroTitle.map((paragraph) => paragraph.children.map((child) => child.text).join('')).join(' ');

  const hoverEffect = {
    y: -5,
    cursor: 'default'
  };

  return (
    <motion.div
      id={sectionId}
      className={`relative my-10 flex cursor-default scroll-mt-[110px] flex-col items-center dark:text-darkForeground ${textClass}`}
      whileHover="hover"
      role="region"
      aria-labelledby={`${sectionId}-heading`}>
      <h1 id={`${sectionId}-heading`} className="text-center text-4xl" aria-label={ariaLabelText}>
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
