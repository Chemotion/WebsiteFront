'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function InfoBanner() {
  const [dismissed, setDismissed] = useState(
    () => typeof window !== 'undefined' && Boolean(localStorage.getItem('infoBannerDismissed'))
  );
  const [atTop, setAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const header = document.querySelector('header[role="banner"]');
    if (!header) return;

    if (mounted) {
      header.style.transition = 'top 0.2s ease-in-out';
    } else {
      header.style.transition = '';
    }

    if (!dismissed && atTop && bannerRef.current && visible) {
      header.style.top = `${bannerRef.current.offsetHeight}px`;
    } else {
      header.style.top = '0';
    }
  }, [dismissed, atTop, mounted, visible]);

  const dismiss = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('infoBannerDismissed', 'true');
    }
    setDismissed(true);
  };

  if (dismissed || !visible) return null;

  return (
    <div
      ref={bannerRef}
      className={`
        sticky inset-x-0 top-0 z-50 flex items-center justify-center gap-4 bg-gray-950 px-6 py-3 text-xs text-white sm:flex-row sm:text-base
        ${mounted ? 'transition-transform duration-200 ease-in-out' : ''}
        ${atTop ? 'translate-y-0' : '-translate-y-full'}
      `}>
      <p>
        We have recently updated the webpage, so you may come across some broken links. If so, please use the Search
        feature to locate what you need.
      </p>
      <button onClick={dismiss} className="underline hover:text-indigo-200">
        Dismiss
      </button>
    </div>
  );
}
