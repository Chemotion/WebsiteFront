import Link from 'next/link';

const MAX_RESULTS_DISPLAY = 7;

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const SearchResults = ({ results, searchTerm, onItemClick }) => {
  if (results.length > 0) {
    return (
      <div>
        <ul className="divide-y divide-neutral-200">
          {results.slice(0, MAX_RESULTS_DISPLAY).map((doc) => (
            <li key={doc.__id} className="hover:bg-neutral-100 dark:hover:bg-darkBackground">
              <Link
                href={`https://chemotion.net${doc.u}?_highlight=${encodeURIComponent(searchTerm)}#${slug(doc.t)}`}
                onClick={onItemClick}
                className="block px-6 py-4"
                aria-label={`Navigate to ${doc.t}`}
                target="_blank"
                rel="noopener noreferrer">
                <h3 className="truncate font-semibold text-gray-900 dark:text-darkForeground">{doc.t}</h3>
                <p className="truncate text-sm text-gray-500 dark:text-darkForeground">{doc.u}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 py-4 text-center">
          <a
            href="https://docs.web123.chemotion.scc.kit.edu/search"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline">
            See all results
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="px-6 py-4 text-center text-gray-500 dark:text-darkForeground">
      No results found for <span className="font-bold">{searchTerm}</span>.
    </div>
  );
};

export default SearchResults;
