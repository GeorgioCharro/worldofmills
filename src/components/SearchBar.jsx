import React, { useState, useEffect, useRef } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../firebase.config';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import SearchResult from './SearchResult';


function SearchBar() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = (state) => {
      document.body.style.overflow = state ? 'hidden' : 'auto';
    };

    if (input !== '') {
      handleScroll(true); // Disable scrolling when there are inputs
      const fetchResults = async () => {
        const q = query(collection(db, 'machines'), where('machineName', '>=', input));
        const querySnapshot = await getDocs(q);
        const fetchedResults = [];
        querySnapshot.forEach((doc) => {
          fetchedResults.push({ id: doc.id, data: doc.data() });
        });
        setResults(fetchedResults);
      };

      fetchResults();
    } else {
      handleScroll(false); // Enable scrolling when input is empty
      setResults([]);
    }

    // Cleanup to enable scrolling when component unmounts
    return () => handleScroll(false);
  }, [input]);

  // Handle outside clicks to close the search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setResults([]);
        setInput('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div ref={searchBarRef} className=' bg-white/70 backdrop-blur-md flex  w-full top-0 px-4 py-2 z-50 fixed md:hidden'>
      <div className=" items-center w-full p-4 max-w-4xl mx-auto  md:hidden text-center flex">
        <div className="border pt-3 pb-3 pl-4 pr-4 rounded-full items-center justify-evenly flex shadow-xl w-full  space-x-3">
          <SearchIcon className="cursor-pointer text-gray-600" sx={{ fontSize: 24 }} />
          <input
            type="text"
            placeholder="Write the name of the machine"
            className="w-full bg-transparent outline-none  font-bold placeholder-gray-500"
            onChange={handleInputChange}
            value={input}
          />
          <TuneIcon className="cursor-pointer text-gray-600 ml-auto" sx={{ fontSize: 24 }} />
        </div>
      </div>
      {results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white bg-white/70 backdrop-blur-md p-4 shadow-xl overflow-y-auto max-h-80">
          {results.map((machine) => (
            <SearchResult key={machine.id} machine={machine.data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
