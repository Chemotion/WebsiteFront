import Link from 'next/link';

const DesktopMenu = ({ primaryNavLinks, secondaryNavLinks }) => {
  return (
    <div className="hidden w-full items-center justify-between custom-lg:flex">
      <nav className="flex space-x-8" aria-label="Primary navigation">
        {primaryNavLinks.map(({ href, label, ariaLabel }) => (
          <Link
            key={href}
            href={href}
            className="group relative transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400"
            aria-label={ariaLabel}>
            {label}
            <span className="absolute bottom-[-4px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
              <span className="block size-full bg-gray-500"></span>
            </span>
          </Link>
        ))}
      </nav>
      <nav className="flex space-x-8" aria-label="Secondary navigation">
        {secondaryNavLinks.map(({ href, label, ariaLabel, external }) => (
          <Link
            key={href}
            href={href}
            aria-label={ariaLabel}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group relative transition-colors duration-300 hover:text-gray-700 dark:hover:text-darkForeground">
            {label}
            <span className="absolute bottom-[-4px] left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full">
              <span className="block size-full bg-gray-500"></span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DesktopMenu;
