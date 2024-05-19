import React from 'react';
import { ReactComponent as RightIcon } from '../media/svg/rightIcon.svg';

function SearchResult({ machine, language }) {
  return (
    <div className="flex justify-between items-center mb-4 relative">
      <div className="card card-side bg-base-100 shadow-xl pl-4 w-full">
        <figure>
          <img className="w-full h-24 object-cover rounded-lg" src={machine.imgUrls[0]} alt="Machine" />
        </figure>
        <div className="card-body flex flex-col justify-center">
          <h3 className="card-title mb-0">
            {language === 'ar' ? machine.machineName_ar : machine.machineName}
          </h3>
          <RightIcon className="h-6 w-6 absolute top-1/2 right-4 -mt-3 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
