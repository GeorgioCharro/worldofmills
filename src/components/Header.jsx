// Header.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import WorldofMills from '../media/png/Logo.png';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../firebase.config';
import SearchResult from './SearchResult';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import AccountCircle icon

function Header({ setSearchOpenRef }) {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef(null);

    

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
                
                <Link to="/profile">
                    <IconButton>
                        <AccountCircleIcon className="cursor-pointer" sx={{ fontSize: 30 }} />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Header;
