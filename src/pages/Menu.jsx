import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorldofMills from '../media/png/Logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the previous page
  };

  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex p-4">
      <div className="bg-white p-4 w-full">
        <div className='flex justify-end'>
          <button onClick={handleBackClick} className="text-gray-600 hover:text-gray-900">
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <div className="flex py-4">
          <img src={WorldofMills} alt="WorldofMills Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold mt-2 ml-2">WorldofMills</h1>
        </div>
        <div className='flex'>
          <p className="text-gray-600 font-bold text-center mt-2">
            From production lines to your first product.
          </p>
        </div>
        <div className="flex">
          <p className='text-gray-600 font-bold text-center'>Contact us to learn more.</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button 
            onClick={() => handleNavigation('https://www.instagram.com/_worldofmills_/')} 
            className="text-gray-600 hover:text-gray-900 p-2 bg-gray-50 rounded-full"
          >
            <InstagramIcon fontSize="medium" />
          </button>
          <button 
            onClick={() => handleNavigation('https://api.whatsapp.com/send/?phone=971526211664&text&type=phone_number&app_absent=0')} 
            className="text-gray-600 hover:text-gray-900 p-2 bg-gray-100 rounded-full"
          >
            <WhatsAppIcon fontSize="medium" />
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
          <Link to={'/'} className="text-lg font-bold text-gray-800 hover:text-gray-900 w-full text-left">HOME</Link>
          <Link to={'/profile'} className="text-lg font-bold text-gray-800 hover:text-gray-900 w-full text-left">PROFILE</Link>
          <Link to={'/menu'} className="text-lg font-semibold text-gray-800 hover:text-gray-900 w-full text-left">MENU PAGE</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
