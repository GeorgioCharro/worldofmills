import Logo from '../media/svg/Logo.svg';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleBrightnessClick = () => {
        
    };

    const handleSearchClick = () => {
        
    };

    return (<>
        
            <div className='hidden md:flex justify-between items-center p-4 m-4 '>
            <div className='flex items-center'>
                <img src={Logo} alt="logo" className='h-9 w-9' />
                <p className='font-bold text-3xl'>WorldofMills</p>
            </div>
            <div className='hidden md:flex items-center'>
                
                <IconButton onClick={handleBrightnessClick}>
                    <LightModeIcon className="cursor-pointer " sx={{fontSize: 30}} />
                </IconButton>
                <IconButton onClick={handleSearchClick}>
                    <SearchIcon className="cursor-pointer " sx={{fontSize: 30}} />
                </IconButton>
            </div>
            
        </div>
        
        
        </>
    )
}

export default Header;