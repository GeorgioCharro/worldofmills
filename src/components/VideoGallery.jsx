import React from 'react';
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
      
      <div className="flex flex-col md:flex-row items-start justify-evenly p-6">
        
        {/* Paragraph Section */}
        <div className="flex-col flex flex-1 md:mr-2 mb-8 md:mb-0 ml-8 ">
                        <p className="text-4xl md:text-6xl mt-10 font-bold">{t('Check out our hottest videos')}</p>
                        <p className="text-gray-600 mb-8 mt-8 text-xl ">
                            {t('View more and share more new perspectives on just about any topic. Everyone’s welcome.')}
                        </p>
                        <div className="relative flex items-center justify-center p-10 -ml-9 ">
                            <div className="absolute top-0 left-0 transform md:-translate-y-2/3 md:size-64 size-56 -translate-y-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                            <div className="absolute bottom-0 right-0 transform md:-translate-y-2/3 md:size-64 size-56 -translate-y-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

                            <button
                                className="z-10 bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-yellow-600 transition duration-200"
                                onClick={handleImageClick}
                            >
                                {t('Click Me')}
                            </button>
                        </div>
                    </div>

        {/* Main Video Section */}
        <div className="flex p-4 order-0 md:order-1">
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
