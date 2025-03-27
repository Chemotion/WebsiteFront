import Link from 'next/link';

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
      <ul className="divide-y divide-neutral-200">
        {results.map((doc) => (
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
    );
  }
  return (
    <div className="px-6 py-4 text-center text-gray-500 dark:text-darkForeground">
      No results found for <span className="font-bold">{searchTerm}</span>.
    </div>
  );
};

export default SearchResults;
