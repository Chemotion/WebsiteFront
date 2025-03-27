import SearchResults from './SearchResults';

const MobileSearch = ({ isSearchVisible, toggleSearch, searchTerm, handleSearch, searchSubText, searchResults }) => (
  <div
    className={`fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 dark:bg-darkBackground custom-lg:hidden ${
      isSearchVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-5 opacity-0'
    }`}>
    <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-darkForeground">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        autoFocus
        placeholder={searchSubText}
        className="grow rounded-md border border-gray-300 p-2 focus:outline-none dark:border-darkForeground"
      />
      <button
        onClick={toggleSearch}
        aria-label="Close search"
        className="ml-6 mr-2 text-2xl font-bold text-gray-500 hover:text-gray-700 dark:text-darkForeground">
        ✕
      </button>
    </div>
    <div className="grow overflow-auto p-4">
      {searchResults.length > 0 ? (
        <SearchResults results={searchResults} searchTerm={searchTerm} onItemClick={toggleSearch} />
      ) : searchTerm.trim().length > 0 ? (
        <div className="mt-4 text-center text-gray-500">
          No results found for <span className="font-bold">{searchTerm}</span>.
        </div>
      ) : null}
    </div>
  </div>
);

export default MobileSearch;
