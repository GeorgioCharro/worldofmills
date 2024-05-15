// MenuBar.jsx
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlMenuBar = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', controlMenuBar);
    return () => {
      window.removeEventListener('resize', controlMenuBar);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isMenuOpen && (
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {/* Add more menu items here */}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MenuBar;
