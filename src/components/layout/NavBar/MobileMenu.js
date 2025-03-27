import Link from 'next/link';

const MobileMenu = ({ isMobileMenuOpen, toggleMenu, primaryNavLinks, secondaryNavLinks }) => (
  <>
    <button
      onClick={toggleMenu}
      className="relative z-50 focus:outline-none custom-lg:hidden"
      aria-label="Toggle mobile menu"
      aria-expanded={isMobileMenuOpen}>
      <div className="space-y-1.5">
        <span
          className={`block h-0.5 w-6 bg-gray-600 transition duration-300 dark:bg-darkForeground ${
            isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
          }`}></span>
        <span
          className={`block h-0.5 w-6 bg-gray-600 transition duration-300 dark:bg-darkForeground ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
        <span
          className={`block h-0.5 w-6 bg-gray-600 transition duration-300 dark:bg-darkForeground ${
            isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
          }`}></span>
      </div>
    </button>
    <div
      role="button"
      tabIndex={0}
      onClick={toggleMenu}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleMenu();
        }
      }}
      className={`fixed inset-0 z-40 transition-opacity duration-300 custom-lg:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}>
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 h-full w-2/3 bg-white p-8 shadow-md transition-transform duration-300 dark:border-l-2 dark:border-darkForeground dark:bg-darkBackground ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <nav className="mt-4 flex flex-col space-y-8">
          {primaryNavLinks.map(({ href, label, ariaLabel }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMenu}
              className="text-xl font-medium text-gray-800 dark:text-darkForeground"
              aria-label={ariaLabel}>
              {label}
            </Link>
          ))}
          <div className="w-full border-t border-gray-300 dark:border-darkForeground"></div>
          {secondaryNavLinks.map(({ href, label, ariaLabel, external }) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMenu}
              className="text-xl font-medium text-gray-800 dark:text-darkForeground"
              aria-label={ariaLabel}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  </>
);

export default MobileMenu;
