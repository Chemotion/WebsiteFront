'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

export default function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const fuseRef = useRef(null);

  // fetch and initialize fuse
  useEffect(() => {
    fetch('/api/search')
      .then((res) => res.json())
      .then((data) => {
        const blocks = Array.isArray(data) ? data : [data];
        const mergedDocuments = [];

        // unique id due to avoid multiple blocks id colliding
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

  return { searchTerm, setSearchTerm, searchResults };
}
