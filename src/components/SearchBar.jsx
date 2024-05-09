// SearchBar.js

import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function SearchBar() {
  return (
    <div className='bg-white bg-white/70 backdrop-blur-md flex justify-center w-full p-2  z-50 fixed md:hidden'>
    <div className="   justify-center md:hidden text-center flex  ">
      <div className="border pt-3 pb-3 pl-4 pr-4 rounded-full items-center flex shadow-xl space-x-3 ">
        <SearchIcon className="cursor-pointer text-gray-600" sx={{ fontSize: 24 }} />
        <div className="flex flex-col">
          <span className="font-bold text-md"> Click to Search</span>
          <span className="text-gray-500 text-sm ">Write the name of the machine</span>
        </div>
        <TuneIcon className="cursor-pointer text-gray-600 ml-auto" sx={{ fontSize: 24 }} />
      </div>
    </div>
    </div>
    
  );
}

export default SearchBar;
