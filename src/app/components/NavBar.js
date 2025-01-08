'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center py-[3px] h-16 z-50 text-[18px] bg-[#ecedee] shadow-md font-thin text-black">
      <div className="container mx-auto max-w-7xl flex items-center justify-between custom-lg:px-12">
        <div className="flex items-center">
          <Link href="/" onClick={scrollToTop} className="group relative flex items-center">
            <Image
              src="/chemotion-lg.png"
              alt="Logo"
              width={95}
              height={57}
              className="mr-10 ml-4 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
              priority
            />
          </Link>
          <nav className="hidden custom-lg:flex space-x-10">
            <Link href="/#eln" className="relative group hover:text-gray-600 transition-colors duration-300">
              ELN
              <span className="absolute left-1/2 bottom-[-4px] h-[1px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>

            <Link href="/#labimotion" className="relative group hover:text-gray-600 transition-colors duration-300">
              LabIMotion
              <span className="absolute left-1/2 bottom-[-4px] h-[1px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>

            <Link href="/#repository" className="relative group hover:text-gray-600 transition-colors duration-300">
              Repository
              <span className="absolute left-1/2 bottom-[-4px] h-[1px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden custom-lg:flex space-x-8">
            <Link href="/helpdesk" className="relative group hover:text-gray-600 transition-colors duration-300">
              Helpdesk
              <span className="absolute left-1/2 bottom-[-4px] h-[1px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
            <Link href="/whoweare" className="relative group hover:text-gray-600 transition-colors duration-300">
              Who we are
              <span className="absolute left-1/2 bottom-[-4px] h-[1px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
                <span className="block w-full h-full bg-gray-500"></span>
              </span>
            </Link>
          </nav>
          <div className="relative">
            <div
              onClick={!isSearchVisible ? toggleSearch : undefined}
              className={`mr-4 flex items-center justify-center duration-300 ease-in-out rounded-lg shadow-md ${
                isSearchVisible
                  ? 'w-48 p-2 bg-[#F6F6F6] text-gray-800'
                  : 'w-20 p-2 bg-gray-600 text-white font-light text-[16px] cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:border-gray-800 hover:shadow-lg'
              }`}>
              {isSearchVisible ? (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onBlur={() => setIsSearchVisible(false)}
                  autoFocus
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none transition-opacity"
                />
              ) : (
                'Search'
              )}
            </div>
          </div>
          <button onClick={toggleMenu} className="custom-lg:hidden focus:outline-none p-2 relative z-50">
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
        className={`custom-lg:hidden bg-[#ecedee] fixed inset-y-0 right-0 w-1/2 pt-24 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <nav className="flex flex-col items-center space-y-6 text-[#4D5357]">
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
            href="/helpdesk"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-gray-600 transition-colors font-light text-lg">
            Helpdesk
          </Link>
          <Link
            href="/whoweare"
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
