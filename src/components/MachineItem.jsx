import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
function MachineItem({ machine, name }) {
  return (
    <div className="max-w-xs w-full md:w-1/4 lg:w-1/5 p-4">
      <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white"> {/* Ensuring full height */}
        <div className="flex-shrink-0"> {/* Prevents the image from shrinking */}
          <LazyLoadImage className="w-full h-48 object-cover" src={machine.imgUrls[0]} alt={name} /> {/* Fixed height for images */}
        </div>
        <div className="flex-grow px-6 py-4 flex flex-col justify-between"> {/* Flex-grow to fill the container */}
          <div>
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              {machine.description}
            </p>
          </div>
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{machine.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineItem;
