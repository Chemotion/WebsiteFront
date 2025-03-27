'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSearch from '@/hooks/useSearch';
import useContent from '@/hooks/useContent';
import LoadingAnimation from '@/components/ui/LoadingAnimation';
import DesktopMenu from './NavBar/DesktopMenu';
import MobileMenu from './NavBar/MobileMenu';
import DesktopSearch from './NavBar/DesktopSearch';
import MobileSearch from './NavBar/MobileSearch';

const NavBar = () => {
  const { searchTerm, setSearchTerm, searchResults } = useSearch();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const { content, isLoading } = useContent({
    apiKey: 'navigation-bar',
    fallbackKey: 'navigationBar'
  });

  const toggleSearch = useCallback(() => {
    setIsSearchVisible((prev) => !prev);
    setSearchTerm('');
  }, [setSearchTerm]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleBlur = () => {
    if (!isDropdownHovered) {
      setIsSearchVisible(false);
    }
  };

  const scrollToTop = (e) => {
    const isRootPath = window.location.pathname === '/';
    if (isRootPath && window.location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => history.replaceState({}, '', '/'), 300);
    } else if (isRootPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchVisible((prev) => !prev);
        if (isSearchVisible) {
          setSearchTerm('');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchVisible, setSearchTerm]);

  if (isLoading) return <LoadingAnimation />;

  const primaryNavLinks = [
    { href: content?.elnLink, label: content?.elnButton, ariaLabel: `Navigate to ${content?.elnButton} section` },
    {
      href: content?.labimotionLink,
      label: content?.labimotionButton,
      ariaLabel: `Navigate to ${content?.labimotionButton} section`
    },
    { href: content?.repoLink, label: content?.repoButton, ariaLabel: `Navigate to ${content?.repoButton} section` }
  ];

  const secondaryNavLinks = [
    { href: content?.aboutLink, label: content?.aboutButton, ariaLabel: 'Learn more about us' },
    { href: content?.helpdeskLink, label: content?.helpdeskButton, ariaLabel: 'Navigate to Helpdesk' },
    {
      href: content?.docsLink,
      label: content?.docsButton,
      ariaLabel: 'Navigate to Chemotion documentation',
      external: true
    }
  ];

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 flex h-[66px] items-center bg-[#F5F5F5] py-[3px] text-base font-medium text-gray-700 shadow-md dark:border-b dark:border-darkForeground dark:bg-darkBackground dark:text-darkForeground"
        role="banner">
        <div className="container mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex flex-1 items-center">
            <div className="transition-opacity duration-300 ease-in-out hover:opacity-80">
              <Link
                href="/"
                onClick={scrollToTop}
                className="ml-4 mr-12 flex items-center text-lg font-semibold text-gray-700 dark:text-darkForeground"
                aria-label="Navigate to Chemotion homepage">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.logo?.url}`}
                  alt={content?.logo?.alternativeText}
                  width={35}
                  height={Math.round(content?.logo?.height * (35 / content?.logo?.width))}
                  unoptimized
                  onLoad={() => setLogoLoaded(true)}
                  className={`mr-4 transition-opacity duration-500 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {content?.logoText}
              </Link>
            </div>
            <div className="flex-1">
              <DesktopMenu primaryNavLinks={primaryNavLinks} secondaryNavLinks={secondaryNavLinks} />
            </div>
          </div>
          <div className="ml-4 flex items-center space-x-4">
            <DesktopSearch
              isSearchVisible={isSearchVisible}
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              handleBlur={handleBlur}
              toggleSearch={toggleSearch}
              searchResults={searchResults}
              searchText={content?.searchText}
              searchSubText={content?.searchSubText}
              searchIcon={content?.searchIcon}
              onDropdownEnter={() => setIsDropdownHovered(true)}
              onDropdownLeave={() => setIsDropdownHovered(false)}
            />
            {/* mobile search button */}
            <div className="custom-lg:hidden">
              <button
                onClick={toggleSearch}
                aria-label="Toggle search"
                className="ml-4 flex h-10 w-28 cursor-pointer items-center justify-center rounded-full border-2 border-neutral-50 bg-neutral-50 px-4 py-2 font-light text-gray-800 shadow-md duration-300 ease-in-out hover:text-gray-700 dark:border-darkForeground dark:bg-darkBackground dark:text-darkForeground">
                <div className="mr-2 size-6 text-[#008ab8] dark:text-darkForeground">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${content?.searchIcon?.url}`}
                    alt={content?.searchIcon?.alternativeText}
                    width={24}
                    height={Math.round(content?.searchIcon?.height * (24 / content?.searchIcon?.width))}
                    className="mr-2 size-6 dark:brightness-0 dark:invert"
                  />
                </div>
                <div className="text-gray-700 dark:text-darkForeground">{content?.searchTextMobileView}</div>
              </button>
            </div>
            <MobileMenu
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMenu={toggleMenu}
              primaryNavLinks={primaryNavLinks}
              secondaryNavLinks={secondaryNavLinks}
            />
          </div>
        </div>
      </header>
      <MobileSearch
        isSearchVisible={isSearchVisible}
        toggleSearch={toggleSearch}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        searchSubText={content?.searchSubText}
        searchResults={searchResults}
      />
    </>
  );
};

export default NavBar;
