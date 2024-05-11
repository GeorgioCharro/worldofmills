// NewsletterSection.js
import React from 'react';
import Infographic from '../media/png/Chart.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

function NewsletterSection() {
  const whatsappLink = "https://wa.me/1234567890?text=I'm%20interested%20in%20your%20machinery%20consultancy%20services";
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row mt-12 justify-between items-center p-8 bg-white shadow-lg rounded-lg">
      {/* Text Section */}
      <div className="flex-1 md:mr-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
          {t('Message us on WhatsApp')}
          <span role="img" aria-label="newsletter" className="ml-2">🎉</span>
        </h2>
        <p className="text-gray-600 mb-8">
          {t("Message us on WhatsApp to benefit from our consultancy services in starting your machinery business")}
        </p>

        {/* Benefits */}
        <ul className="mb-8">
          <li className="flex items-center mb-2">
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-blue-700 text-blue-200 mr-3">
              01
            </span>
            <span className="text-gray-600">{t('Get more discount')}</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="flex justify-center items-center w-8 h-8 rounded-full bg-yellow-500 text-yellow-100 mr-3">
              02
            </span>
            <span className="text-gray-600">{t('Get premium magazines')}</span>
          </li>
        </ul>

        {/* WhatsApp Button */}
        <div className="flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition duration-200"
          >
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            <span className="ml-2">{t('WhatsApp')}</span>
          </a>
        </div>
      </div>

      {/* Infographic Section */}
      <div className="flex-1 mt-8 md:mt-0 ml-6">
        <img src={Infographic} alt="Infographic" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default NewsletterSection;
