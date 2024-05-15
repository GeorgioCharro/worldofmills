// Header.js
import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import WorldofMills from '../media/png/Logo.png';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebase.config';
import SearchResult from './SearchResult';

function Header({ setSearchOpenRef }) {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef(null);

    const handleBrightnessClick = () => {
        // Handle brightness logic here
    };

    const handleSearchClick = () => {
        setSearchOpen(!searchOpen);
    };

    const handleInputChange = async (event) => {
        const input = event.target.value;
        setInput(input);

        if (input !== '') {
            const q = query(collection(db, 'machines'), where('machineName', '>=', input));
            const querySnapshot = await getDocs(q);
            const fetchedResults = [];
            querySnapshot.forEach((doc) => {
                fetchedResults.push({ id: doc.id, data: doc.data() });
            });
            setResults(fetchedResults);
        } else {
            setResults([]);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
                setInput('');
                setResults([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (setSearchOpenRef) {
            setSearchOpenRef.current = () => setSearchOpen(true);
        }
    }, [setSearchOpenRef]);

    return (
        <div className='hidden md:flex justify-between items-center md:p-4 md:m-4'>
            <div className='flex items-center'>
                <img src={WorldofMills} alt="logo" className='size-14 mr-2' />
                <p className='font-bold text-3xl'>WorldofMills</p>
            </div>
            <div className='flex items-center' ref={searchRef}>
                <IconButton onClick={handleSearchClick}>
                    <SearchIcon className="cursor-pointer" sx={{ fontSize: 30 }} />
                </IconButton>
                {searchOpen && (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search machines..."
                            className="outline-none border p-2 rounded"
                            onChange={handleInputChange}
                            value={input}
                        />
                        {results.length > 0 && (
                            <div className="absolute w-auto max-w-md left-0 p-1 rounded-xl bg-white shadow-lg overflow-auto z-10" style={{ maxHeight: '300px' }}>
                                {results.map(machine => (
                                    <SearchResult key={machine.id} machine={machine.data} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
                <IconButton onClick={handleBrightnessClick}>
                    <label className="swap swap-rotate">
                    
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />
                    
                    {/* sun icon */}
                    <svg className="swap-off fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    {/* moon icon */}
                    <svg className="swap-on fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                    </label>
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
