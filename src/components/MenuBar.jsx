// MenuBar.js
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

function MenuBar() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const controlMenuBar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlMenuBar);
    return () => {
      window.removeEventListener('scroll', controlMenuBar);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 w-full flex justify-evenly items-center py-2 px-8 bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Explore Icon */}
      <div className="flex flex-col items-center">
        <IconButton>
          <SearchIcon className="text-red-600" sx={{ fontSize: 28 }} />
        </IconButton>
        <span className="text-xs text-gray-600">Explore</span>
      </div>

      

      

      {/* Menu Icon */}
      <div className="flex flex-col items-center">
        <IconButton>
          <MenuIcon className="text-gray-600" sx={{ fontSize: 28 }} />
        </IconButton>
        <span className="text-xs text-gray-600">Menu</span>
      </div>
    </div>
  );
}

export default MenuBar;
