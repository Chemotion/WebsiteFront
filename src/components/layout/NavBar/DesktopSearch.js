import Image from 'next/image';
import SearchResults from './SearchResults';

const DesktopSearch = ({
  isSearchVisible,
  searchTerm,
  handleSearch,
  handleBlur,
  toggleSearch,
  searchResults,
  searchText,
  searchSubText,
  searchIcon,
  onDropdownEnter,
  onDropdownLeave
}) => (
  <div className="relative hidden custom-lg:block">
    <div
      onClick={!isSearchVisible ? toggleSearch : undefined}
      onKeyDown={(e) => e.key === 'Enter' && !isSearchVisible && toggleSearch()}
      role="button"
      tabIndex={0}
      className={`ml-4 flex items-center justify-between rounded-full px-4 py-2 font-light duration-300 ease-in-out ${
        isSearchVisible
          ? 'h-10 w-72 border-2 border-gray-500 bg-white text-gray-700 dark:border-darkForeground dark:bg-darkBackground dark:text-darkForeground'
          : 'h-10 w-52 border-2 border-neutral-50 bg-neutral-50 shadow-md hover:text-gray-700 dark:border-darkForeground dark:bg-darkBackground'
      }`}>
      {isSearchVisible ? (
        <>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            onBlur={handleBlur}
            autoFocus
            placeholder={searchSubText}
            className="w-full bg-transparent font-medium outline-none transition-opacity duration-300"
          />
          <button
            type="button"
            onClick={toggleSearch}
            className="ml-auto text-gray-500 hover:text-gray-700 dark:text-darkForeground">
            ✕
          </button>
        </>
      ) : (
        <div className="flex flex-row items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${searchIcon?.url}`}
            alt={searchIcon?.alternativeText}
            width={24}
            height={Math.round(searchIcon?.height * (24 / searchIcon?.width))}
            className="mx-2 size-6 dark:brightness-0 dark:invert"
            unoptimized
          />
          <div className="text-gray-700 dark:text-darkForeground">{searchText}</div>
        </div>
      )}
    </div>
    {isSearchVisible && (searchResults.length > 0 || searchTerm.trim().length > 0) && (
      <div
        className="absolute right-4 z-50 mt-3 w-[60vw] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-darkForeground dark:bg-darkBackground md:w-[600px]"
        role="menu"
        tabIndex={0}
        onMouseEnter={onDropdownEnter}
        onMouseLeave={onDropdownLeave}>
        <SearchResults results={searchResults} searchTerm={searchTerm} />
      </div>
    )}
  </div>
);

export default DesktopSearch;
