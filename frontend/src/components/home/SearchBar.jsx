// src/components/home/SearchBar.jsx
import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX, FiMapPin } from 'react-icons/fi';

const SearchBar = ({ destinations }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Handle search input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Clear search field
  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    inputRef.current.focus();
  };

  // Select suggestion
  const selectSuggestion = (suggestion) => {
    setQuery(suggestion.name);
    setSuggestions([]);
    // Here you can add logic to navigate to the selected destination page
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={searchRef}>
      <div 
        className={`relative flex items-center bg-white rounded-xl shadow-lg transition-all duration-300 ${
          isFocused ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
          <FiSearch className="w-5 h-5" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          placeholder="Search destinations, hotels, experiences..."
          className="w-full py-5 pl-12 pr-16 text-lg text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-16 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
        
        <button
          type="button"
          className="absolute right-0 flex items-center justify-center h-12 px-6 m-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="hidden md:inline mr-1">Search</span>
          <FiSearch className="w-5 h-5" />
        </button>
      </div>
      
      {/* Search suggestions dropdown */}
      {isFocused && (query || suggestions.length > 0) && (
        <div className="absolute z-10 w-full mt-1 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-xl">
          {query && suggestions.length === 0 ? (
            <div className="px-4 py-3 text-gray-500">
              No results found for "{query}"
            </div>
          ) : (
            <ul>
              {query.length <= 2 && (
                <li className="px-4 py-5 text-sm font-medium text-gray-500">
                  Popular destinations
                </li>
              )}
              
              {suggestions.map((destination) => (
                <li
                  key={destination.id}
                  onClick={() => selectSuggestion(destination)}
                  className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <FiMapPin className="flex-shrink-0 w-5 h-5 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{destination.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{destination.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
