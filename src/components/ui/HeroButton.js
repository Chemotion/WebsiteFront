import React, { useRef, useState, useCallback, useMemo, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const getRippleAnimation = (type) => {
  const isHover = type === 'hover';
  return {
    initial: { width: 0, height: 0, opacity: 0.5 },
    animate: { width: isHover ? 300 : 200, height: isHover ? 300 : 200, opacity: 0 },
    exit: { opacity: 0, scale: 0 },
    transition: { duration: isHover ? 1 : 0.5, ease: 'easeOut' }
  };
};

const mergeRefs =
  (...refs) =>
  (node) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    });

const useRipple = () => {
  const [ripple, setRipple] = useState(null);
  const buttonRef = useRef(null);

  const triggerRipple = useCallback((type, x, y) => {
    setRipple({ type, x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect();
      triggerRipple('hover', width / 2, height / 2);
    }
  }, [triggerRipple]);

  const handleMouseLeave = useCallback(() => {
    setRipple((prev) => (prev?.type === 'hover' ? null : prev));
  }, []);

  const handleClick = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      triggerRipple('click', x, y);

      setTimeout(() => {
        if (buttonRef.current && buttonRef.current.matches(':hover')) {
          const { width, height } = buttonRef.current.getBoundingClientRect();
          triggerRipple('hover', width / 2, height / 2);
        } else {
          setRipple(null);
        }
      }, 500);
    },
    [triggerRipple]
  );

  const rippleVariants = useMemo(() => (ripple ? getRippleAnimation(ripple.type) : null), [ripple]);

  return { ripple, rippleVariants, buttonRef, handleMouseEnter, handleMouseLeave, handleClick };
};

const HeroButtonComponent = ({ as, className, children, onClick, ...props }, ref) => {
  const { ripple, rippleVariants, buttonRef, handleMouseEnter, handleMouseLeave, handleClick } = useRipple();
  const combinedRef = useMemo(() => mergeRefs(buttonRef, ref), [buttonRef, ref]);
  const Component = as ? motion[as] : motion.button;

  const handleClickWrapper = useCallback(
    (event) => {
      handleClick(event);
      if (onClick) onClick(event);
    },
    [handleClick, onClick]
  );

  return (
    <div className="inline-flex items-center align-middle">
      <div className="relative inline-block">
        <Component
          ref={combinedRef}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className={classNames(
            'relative overflow-hidden inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 h-auto min-h-10',
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClickWrapper}
          {...props}>
          <span className="invisible opacity-0" aria-hidden="true">
            {children}
          </span>
          <AnimatePresence>
            {ripple && rippleVariants && (
              <motion.div
                key={ripple.type}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
                style={{ left: ripple.x, top: ripple.y }}
                initial={rippleVariants.initial}
                animate={rippleVariants.animate}
                exit={rippleVariants.exit}
                transition={rippleVariants.transition}
              />
            )}
          </AnimatePresence>
        </Component>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center shadow-sm">
          <span className="flex items-center justify-center whitespace-nowrap font-semibold">{children}</span>
        </div>
      </div>
    </div>
  );
};

const HeroButton = forwardRef(HeroButtonComponent);
export default HeroButton;
