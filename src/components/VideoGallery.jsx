import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTranslation } from 'react-i18next';
import TiktokImage from '../media/png/TikTok-Image.png';

function VideoGallery() {
  const { t } = useTranslation();

  const handleImageClick = () => {
    window.open('https://www.tiktok.com/@worldofmills1?_t=8mNY2UNYx4C&_r=1', '_blank');
  };

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-semibold ml-12 mt-8 mb-8">🎬 {t('The Videos')}</h2>
      <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400 ml-12">
        {t('Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.')}
      </span>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly p-6 ">
        
        {/* Video Thumbnails (Placeholder for now) */}
        
        {/* Main Video Section */}
        <div className="flex p-4  order-0 md:order-1">
          <div className="mockup-phone border-yellow-500 relative w-80 h-[40rem] mx-auto">
            <div className="absolute inset-x-0 top-0 w-16 h-1 bg-gray-600 rounded-full mt-2 mx-auto"></div>
            <div className="absolute inset-x-0 top-4 w-12 h-1 bg-gray-400 rounded-full mx-auto"></div>
            <div className="relative w-full h-full mt-8 p-4 overflow-hidden rounded-xl flex justify-center items-center">
              <img
                src={TiktokImage}
                alt="TikTok"
                className="object-contain w-full h-full cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoGallery;
