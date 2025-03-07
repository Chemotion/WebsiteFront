'use client';

import React, { useRef, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mergeClassNames = (...classes) => classes.filter(Boolean).join(' ');

const getRippleAnimation = (type) => ({
  initial: { width: 0, height: 0, opacity: 0.5 },
  animate: {
    width: type === 'hover' ? 300 : 200,
    height: type === 'hover' ? 300 : 200,
    opacity: 0
  },
  exit: { opacity: 0, scale: 0 },
  transition: {
    duration: type === 'hover' ? 1 : 0.5,
    ease: 'easeOut'
  }
});

export const HeroButton = React.forwardRef(({ as, className, children, ...props }, forwardedRef) => {
  const [ripple, setRipple] = useState(null);
  const buttonRef = useRef(null);

  const combinedRef = useCallback(
    (node) => {
      buttonRef.current = node;
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else forwardedRef.current = node;
      }
    },
    [forwardedRef]
  );

  const handleMouseEnter = useCallback(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect();
      setRipple({ type: 'hover', x: width / 2, y: height / 2 });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRipple((prev) => (prev?.type === 'hover' ? null : prev));
  }, []);

  const handleClick = useCallback(
    (event) => {
      const buttonRect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - buttonRect.left;
      const y = event.clientY - buttonRect.top;
      setRipple({ type: 'click', x, y });

      if (props.onClick) props.onClick(event);

      setTimeout(() => {
        if (buttonRef.current && buttonRef.current.matches(':hover')) {
          const { width, height } = buttonRef.current.getBoundingClientRect();
          setRipple({ type: 'hover', x: width / 2, y: height / 2 });
        } else {
          setRipple(null);
        }
      }, 500);
    },
    [props]
  );

  const rippleVariants = useMemo(() => ripple && getRippleAnimation(ripple.type), [ripple]);

  const Component = as ? motion[as] : motion.button;

  return (
    <div className="inline-flex items-center" style={{ verticalAlign: 'middle' }}>
      <div className="relative inline-block">
        <Component
          ref={combinedRef}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className={mergeClassNames(
            'relative overflow-hidden inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 h-auto min-h-10',
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          {...props}>
          <span className="invisible opacity-0" aria-hidden="true">
            {children}
          </span>
          <AnimatePresence>
            {ripple && rippleVariants && (
              <motion.div
                key={ripple.type}
                className="pointer-events-none absolute rounded-full bg-white/30"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  transform: 'translate(-50%, -50%)'
                }}
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
});

HeroButton.displayName = 'HeroButton';
