import React, { useEffect, useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';

function MenuBar() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();
  const lastScrollY = useRef(0);

  const controlMenuBar = () => {
    if (window.scrollY > lastScrollY.current) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlMenuBar);
    return () => {
      window.removeEventListener('scroll', controlMenuBar);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 w-full flex justify-evenly items-center py-2 px-4 bg-white shadow-md md:hidden z-50 menu-bar ${
        isVisible ? 'show' : 'hide'
      }`}
      style={{ height: '56px' }}
    >
      {/* Explore Icon */}
      <Link to={'/'}>
        <div className="flex flex-col items-center">
          <IconButton>
            <SearchIcon className="text-gray-500" sx={{ fontSize: 28 }} />
          </IconButton>
          <span className="text-xs text-gray-600">{t('Explore')}</span>
        </div>
      </Link>
      <Link to={'/profile'}>
        <div className="flex flex-col items-center">
          <IconButton>
            <AccountCircleIcon className="text-gray-500" sx={{ fontSize: 28 }} />
          </IconButton>
          <span className="text-xs text-gray-600">{t('Profile')}</span>
        </div>
      </Link>

      {/* Menu Icon */}
      <Link to={'/menu'}>
        <div className="flex flex-col items-center">
          <IconButton>
            <MenuIcon className="text-gray-600" sx={{ fontSize: 28 }} />
          </IconButton>
          <span className="text-xs text-gray-600">{t('Menu')}</span>
        </div>
      </Link>
    </div>
  );
}

export default MenuBar;
