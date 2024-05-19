import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MachineItem({ machine, name }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4"> {/* Adjusted widths */}
      <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="flex-shrink-0">
          <LazyLoadImage className="w-full h-48 object-cover" src={machine.imgUrls[0]} alt={name} />
        </div>
        <div className="flex-grow px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineItem;
