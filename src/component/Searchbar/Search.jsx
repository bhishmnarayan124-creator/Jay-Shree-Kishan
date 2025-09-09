import React, { useState } from 'react'
import './Search.css'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      const res = await fetch(`http://localhost:5000/api/search?q=${value}`);
      const data = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  // ✅ Suggestion select karne par input me set karo
  const handleSelect = (name) => {
    setQuery();     // input box update
    setResults([]);     // list hide
  };

  return (
    <div className='srch'>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder='search'
      />
      <FiSearch className='icn'/>

      {results.length > 0 && (
        <div className="results">
          {results.map((item) => (
            <p key={item._id} onClick={() => handleSelect(item.name)}>
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
