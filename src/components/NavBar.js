'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Fuse from 'fuse.js';

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  // states for docusaurus json data
  const [searchResults, setSearchResults] = useState([]);
  const fuseRef = useRef(null);

  // fetch and initialize fuse
  useEffect(() => {
    fetch('/api/search')
      .then((res) => res.json())
      .then((data) => {
        // data might be an array of blocks or a single object
        const blocks = Array.isArray(data) ? data : [data];
        const mergedDocuments = [];

        // unique id due to multiple blocks id colliding
        let docUniqueId = 0;

        blocks.forEach((block) => {
          if (block.documents) {
            block.documents.forEach((doc) => {
              // flatten doc.b
              if (Array.isArray(doc.b)) {
                doc.b = doc.b.join(' ');
              }
              // assign unique property
              doc.__id = docUniqueId++;
              mergedDocuments.push(doc);
            });
          }
        });

        // weighing results
        fuseRef.current = new Fuse(mergedDocuments, {
          includeScore: true,
          shouldSort: true,
          threshold: 0.2,
          distance: 50,
          minMatchCharLength: 2,
          useExtendedSearch: true,
          keys: [
            { name: 't', weight: 4 }, // title
            { name: 'b', weight: 2 }, // body/tags
            { name: 'u', weight: 1 } // url
          ]
        });
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error('Error fetching search data:', err));
  }, []);

  // filter search results
  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    if (!fuseRef.current) return;

    const results = fuseRef.current.search(searchTerm);
    setSearchResults(results.map((r) => r.item));
  }, [searchTerm]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBlur = () => {
    if (!isDropdownHovered) {
      setIsSearchVisible(false);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = (e) => {
    const isRootPath = window.location.pathname === '/';
    if (isRootPath && window.location.hash) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        history.replaceState({}, '', '/');
      }, 300);
    } else if (isRootPath) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchVisible]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex h-16 items-center bg-[#F0F0F0] py-[3px] text-base font-medium text-gray-700 shadow-md"
      role="banner">
      <div className="container mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <div className="transition-opacity duration-300 ease-in-out hover:opacity-80">
            <Link
              href="/"
              onClick={scrollToTop}
              className="width-auto height-auto group relative ml-4 mr-12 flex items-center font-semibold text-gray-600"
              aria-label="Navigate to Chemotion homepage">
              <Image src="/images/open-c.png" alt="Chemotion Logo" className="mr-4" width={35} height={42} />
              Chemotion
            </Link>
          </div>
          <nav className="hidden space-x-10 custom-lg:flex" aria-label="Main navigation">
            <Link
              href="/#eln"
              className="group relative transition-colors duration-300 hover:text-gray-600"
              aria-label="Navigate to ELN section">
              ELN
              <span className="absolute bottom-[-5px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block size-full bg-gray-500"></span>
              </span>
            </Link>

            <Link
              href="/#labimotion"
              className="group relative transition-colors duration-300 hover:text-gray-600"
              aria-label="Navigate to LabIMotion section">
              LabIMotion
              <span className="absolute bottom-[-5px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block size-full bg-gray-500"></span>
              </span>
            </Link>

            <Link
              href="/#repository"
              className="group relative transition-colors duration-300 hover:text-gray-600"
              aria-label="Navigate to Repository section">
              Repository
              <span className="absolute bottom-[-5px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block size-full bg-gray-500"></span>
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden space-x-6 custom-lg:flex">
            <Link
              href="/about"
              className="group relative transition-colors duration-300 hover:text-gray-600"
              aria-label="Learn more about us">
              Who we are
              <span className="absolute bottom-[-5px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block size-full bg-gray-500"></span>
              </span>
            </Link>
            <Link
              href="/helpdesk"
              className="group relative transition-colors duration-300 hover:text-gray-600"
              aria-label="Navigate to Helpdesk">
              Helpdesk
              <span className="absolute bottom-[-5px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block size-full bg-gray-500"></span>
              </span>
            </Link>
            <Link
              href="https://chemotion.net/docs"
              className="group relative transition-colors duration-300 hover:text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Navigate to Chemotion documentation">
              Docs
              <span className="absolute bottom-[-5px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block size-full bg-gray-500"></span>
              </span>
            </Link>
          </nav>

          {/* desktop search */}
          <div className="relative hidden custom-lg:block">
            <div
              onClick={!isSearchVisible ? toggleSearch : undefined}
              className={`ml-4 flex items-center justify-center rounded-full px-4 py-2 text-base duration-300 ease-in-out custom-lg:mr-4  
                ${isSearchVisible ? 'h-10 w-72 border-2 border-gray-500 bg-white font-light text-gray-800' : 'h-10 w-52 cursor-pointer border-2 border-neutral-50 bg-neutral-50 hover:text-gray-700'}
              `}>
              {isSearchVisible ? (
                <>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    onBlur={handleBlur}
                    autoFocus
                    placeholder="Search the docs"
                    className="w-full bg-transparent font-medium outline-none transition-opacity duration-300"
                  />
                </>
              ) : (
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 size-6 text-[#008ab8]">
                    <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="mr-2 text-gray-500">Search the docs</div>
                </div>
              )}
            </div>

            {/* search results dropdown */}
            {isSearchVisible && (searchResults.length > 0 || searchTerm.trim().length > 0) && (
              <div
                className="absolute right-4 z-50 mt-3 max-h-[500px] w-[60vw] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg md:w-[600px]"
                onMouseEnter={() => setIsDropdownHovered(true)}
                onMouseLeave={() => setIsDropdownHovered(false)}>
                {searchResults.length > 0 ? (
                  <ul className="divide-y divide-neutral-200">
                    {searchResults.map((doc) => (
                      <li key={doc.__id} className="hover:bg-neutral-100">
                        <Link
                          href={`https://chemotion.net${doc.u}?_highlight=${encodeURIComponent(searchTerm)}`}
                          className="block px-6 py-4">
                          <h3 className="truncate font-semibold text-gray-900">{doc.t}</h3>
                          <p className="truncate text-sm text-gray-500">{doc.u}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-4 text-center text-gray-500">
                    No results found for <span className="font-bold">{searchTerm}</span>.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* mobile search */}
          <div className="relative w-full custom-lg:hidden">
            <div
              onClick={toggleSearch}
              className="ml-4 flex h-10 w-32 cursor-pointer items-center justify-center rounded-full border-2 border-neutral-50 bg-neutral-50 px-4 py-2 text-base text-gray-600 duration-300 ease-in-out hover:text-gray-700 custom-lg:mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 size-6 text-[#008ab8]">
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Search</div>
            </div>
            {isSearchVisible && (
              <div className="fixed left-1/2 top-16 mt-2 flex h-12 w-[95vw] -translate-x-1/2 items-center rounded-lg border-2 border-gray-500 bg-white p-2 shadow-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onBlur={handleBlur}
                  autoFocus
                  placeholder="Search"
                  className="w-full bg-transparent outline-none transition-opacity duration-300"
                />
              </div>
            )}

            {/* mobile search results dropdown */}
            {isSearchVisible && (searchResults.length > 0 || searchTerm.trim().length > 0) && (
              <div
                className="fixed left-1/2 top-32 z-50 max-h-[500px] w-[95vw] -translate-x-1/2 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg md:w-[600px]"
                onMouseEnter={() => setIsDropdownHovered(true)}
                onMouseLeave={() => setIsDropdownHovered(false)}>
                {searchResults.length > 0 ? (
                  <ul className="divide-y divide-neutral-200">
                    {searchResults.map((doc) => (
                      <li key={doc.__id} className="hover:bg-neutral-100">
                        <Link
                          href={`https://chemotion.net${doc.u}?_highlight=${encodeURIComponent(searchTerm)}`}
                          className="block px-6 py-4">
                          <h3 className="truncate font-semibold text-gray-900">{doc.t}</h3>
                          <p className="truncate text-sm text-gray-500">{doc.u}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-4 text-center text-gray-500">
                    No results found for <span className="font-bold">{searchTerm}</span>.
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="relative z-50 p-4 focus:outline-none custom-lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-600 transition duration-300 ${isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
              <span
                className={`block h-0.5 w-6 bg-gray-600 transition duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span
                className={`block h-0.5 w-6 bg-gray-600 transition duration-300 ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 right-0 w-1/2 bg-[#F0F0F0] pt-24 transition-transform custom-lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center space-y-6">
          <Link
            href="/#eln"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mb-2 text-lg font-light transition-colors hover:text-gray-600 md:mb-0 md:mr-4"
            aria-label="Navigate to ELN section">
            ELN
          </Link>
          <Link
            href="/#labimotion"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mb-2 text-lg font-light transition-colors hover:text-gray-600 md:mb-0 md:mr-4"
            aria-label="Navigate to LabIMotion section">
            LabIMotion
          </Link>
          <Link
            href="/#repository"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-light transition-colors hover:text-gray-600"
            aria-label="Navigate to Repository section">
            Repository
          </Link>
          <hr className="w-3/4 border-t border-gray-400" />
          <Link
            href="https://chemotion.net/docs"
            className="text-lg font-light transition-colors hover:text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Navigate to Chemotion documentation">
            Docs
          </Link>
          <Link
            href="/helpdesk"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-light transition-colors hover:text-gray-600"
            aria-label="Navigate to Helpdesk">
            Helpdesk
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-light transition-colors hover:text-gray-600"
            aria-label="Learn more about us">
            Who we are
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
