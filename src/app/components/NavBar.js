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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        history.replaceState({}, '', '/');
      }, 300);
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
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchVisible]);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center py-[3px] h-16 z-50 text-base font-medium bg-[#eaeaea] shadow-md  text-gray-600">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="transition-opacity duration-300 ease-in-out hover:opacity-80">
            <Link
              href="/"
              onClick={scrollToTop}
              className="group relative flex items-center font-semibold text-gray-600 mr-12 ml-4">
              <Image src="/closed-c.png" alt="Logo" className="mr-2" width={40} height={40} priority />
              Chemotion
            </Link>
          </div>
          <nav className="hidden custom-lg:flex space-x-10">
            <Link href="/#eln" className="relative group hover:text-gray-600 transition-colors duration-300">
              ELN
              <span className="absolute left-1/2 bottom-[-5px] h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>

            <Link href="/#labimotion" className="relative group hover:text-gray-600 transition-colors duration-300">
              LabIMotion
              <span className="absolute left-1/2 bottom-[-5px] h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>

            <Link href="/#repository" className="relative group hover:text-gray-600 transition-colors duration-300">
              Repository
              <span className="absolute left-1/2 bottom-[-5px] h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden  custom-lg:flex space-x-6">
            <Link
              href="https://chemotion.net/docs"
              className="relative group hover:text-gray-600 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank">
              Docs
              <span className="absolute left-1/2 bottom-[-5px] h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
            <Link href="/helpdesk" className="relative group hover:text-gray-600 transition-colors duration-300">
              Helpdesk
              <span className="absolute left-1/2 bottom-[-5px] h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
            <Link href="/about" className="relative group hover:text-gray-600 transition-colors duration-300">
              Who we are
              <span className="absolute left-1/2 bottom-[-5px] h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
          </nav>

          {/* desktop search */}
          <div className="relative hidden custom-lg:block">
            <div
              onClick={!isSearchVisible ? toggleSearch : undefined}
              className={`custom-lg:mr-4 ml-4 flex items-center text-base justify-center duration-300 ease-in-out rounded-full px-4 py-2  
                ${
                  isSearchVisible
                    ? 'w-64 h-10 bg-white font-light text-gray-800 border-2 border-gray-500'
                    : 'w-52 h-10 bg-gray-100 border-2 cursor-pointer border-gray-100 hover:text-gray-700'
                }
              `}>
              {isSearchVisible ? (
                <>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    onBlur={handleBlur}
                    autoFocus
                    placeholder="Search"
                    className="w-full bg-transparent font-medium outline-none transition-opacity duration-300"
                  />
                </>
              ) : (
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 mr-2 text-[#008ab8]">
                    <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="mr-6 text-gray-500">Search</div>
                  <div className="flex space-x-1 opacity-70 text-gray-500">
                    <div className="px-2 py-1 bg-gray-200 rounded-md border border-gray-300 shadow-sm text-xs font-mono">
                      ctrl
                    </div>
                    <div className="px-2 py-1 bg-gray-200 rounded-md border border-gray-300 shadow-sm text-xs font-mono">
                      K
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* search results dropdown */}
            {isSearchVisible && (searchResults.length > 0 || searchTerm.trim().length > 0) && (
              <div
                className="absolute right-4 mt-3 w-[60vw] md:w-[600px] bg-white border border-gray-200 shadow-lg rounded-lg z-50 max-h-[500px] overflow-y-auto"
                onMouseEnter={() => setIsDropdownHovered(true)}
                onMouseLeave={() => setIsDropdownHovered(false)}>
                {searchResults.length > 0 ? (
                  <ul className="divide-y divide-gray-100">
                    {searchResults.map((doc) => (
                      <li key={doc.__id} className="hover:bg-gray-50">
                        <Link
                          href={`https://chemotion.net${doc.u}?_highlight=${encodeURIComponent(searchTerm)}`}
                          className="block px-6 py-4">
                          <h3 className="font-semibold text-gray-900 truncate">{doc.t}</h3>
                          <p className="text-sm text-gray-500 truncate">{doc.u}</p>
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
              className="custom-lg:mr-4 ml-4 flex items-center text-base text-gray-600 justify-center duration-300 ease-in-out rounded-full px-4 py-2 w-32 h-10 bg-gray-100 border-2 cursor-pointer border-gray-100 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 mr-2 text-[#008ab8]">
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
              <div className="fixed left-1/2 -translate-x-1/2 transform mt-2 top-16 flex items-center h-12 w-[95vw] bg-white border-2 border-gray-500 rounded-lg shadow-md p-2">
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
                className="fixed left-1/2 -translate-x-1/2 transform top-32 w-[95vw] md:w-[600px] bg-white border border-gray-200 shadow-lg rounded-lg z-50 max-h-[500px] overflow-y-auto"
                onMouseEnter={() => setIsDropdownHovered(true)}
                onMouseLeave={() => setIsDropdownHovered(false)}>
                {searchResults.length > 0 ? (
                  <ul className="divide-y divide-gray-100">
                    {searchResults.map((doc) => (
                      <li key={doc.__id} className="hover:bg-gray-50">
                        <Link
                          href={`https://chemotion.net${doc.u}?_highlight=${encodeURIComponent(searchTerm)}`}
                          className="block px-6 py-4">
                          <h3 className="font-semibold text-gray-900 truncate">{doc.t}</h3>
                          <p className="text-sm text-gray-500 truncate">{doc.u}</p>
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

          <button onClick={toggleMenu} className="custom-lg:hidden focus:outline-none p-4 relative z-50">
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`custom-lg:hidden bg-[#eaeaea] fixed inset-y-0 right-0 w-1/2 pt-24 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <nav className="flex flex-col items-center space-y-6">
          <Link
            href="/#eln"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-gray-600 transition-colors font-light text-lg mb-2 md:mb-0 md:mr-4">
            ELN
          </Link>
          <Link
            href="/#labimotion"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-gray-600 transition-colors font-light text-lg mb-2 md:mb-0 md:mr-4">
            LabIMotion
          </Link>
          <Link
            href="/#repository"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-gray-600 transition-colors font-light text-lg">
            Repository
          </Link>
          <hr className="w-3/4 border-t border-gray-400" />
          <Link
            href="https://chemotion.net/docs"
            className="hover:text-gray-600 transition-colors font-light text-lg"
            rel="noopener noreferrer"
            target="_blank">
            Docs
          </Link>
          <Link
            href="/helpdesk"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-gray-600 transition-colors font-light text-lg">
            Helpdesk
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-gray-600 transition-colors font-light text-lg">
            Who we are
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
