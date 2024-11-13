'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#ecedee] py-2 shadow-md z-50">
      <div className="container mx-auto max-w-7xl flex items-center justify-between custom-lg:px-12">
        <div className="flex items-center">
          <Image src="/chemotion.svg" alt="Logo" width={70} height={70} className="mr-8 ml-4" />
          <nav className="hidden custom-lg:flex space-x-6">
            {['Plan', 'Collect & Store', 'Analyse', 'Publish'].map((text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase().replace(/\s/g, '')}`}
                className="text-gray-800 hover:text-gray-600 transition-colors">
                {text}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <nav className="hidden custom-lg:flex space-x-6">
            {['Demo', 'Get Started', 'Helpdesk', 'Who we are'].map((text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase().replace(/\s/g, '')}`}
                className="text-gray-800 hover:text-gray-600 transition-colors">
                {text}
              </a>
            ))}
          </nav>
          <div className="relative">
            <div
              onClick={!isSearchVisible ? toggleSearch : undefined}
              className={`mr-4 flex items-center justify-center transition-all duration-300 ease-in-out rounded-lg shadow-md text-sm ${
                isSearchVisible
                  ? 'w-48 p-2 bg-white text-gray-800 opacity-100 scale-100'
                  : 'w-20 p-2 bg-[#BBBFB6] text-white font-bold text-[16px] cursor-pointer hover:bg-gray-400 opacity-100 scale-100'
              }`}>
              {isSearchVisible ? (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onBlur={() => setIsSearchVisible(false)}
                  autoFocus
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-800 transition-opacity duration-300"
                />
              ) : (
                'Search'
              )}
            </div>
          </div>
          {/* custom hamburger icon for mobile */}
          <button onClick={toggleMenu} className="custom-lg:hidden focus:outline-none p-2 relative z-50">
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`custom-lg:hidden bg-[#ecedee]/90 fixed inset-y-0 right-0 w-1/2 pt-24 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <nav className="flex flex-col items-center space-y-6">
          {['Plan', 'Collect & Store', 'Analyse', 'Publish', 'Demo', 'Get Started', 'Helpdesk', 'Who we are'].map(
            (text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase().replace(/\s/g, '')}`}
                className="text-gray-800 hover:text-gray-600 transition-colors font-medium text-lg">
                {text}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
