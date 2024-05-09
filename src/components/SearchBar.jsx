// SearchBar.js

import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function SearchBar() {
  return (
    <div className="mt-4   justify-center md:hidden  flex fixed top-0 z-50 ">
      <div className="border pt-3 pb-3 pl-4 pr-4 rounded-full items-center flex shadow-xl space-x-3 bg-white bg-white/70 backdrop-blur-md">
        <SearchIcon className="cursor-pointer text-gray-600" sx={{ fontSize: 24 }} />
        <div className="flex flex-col">
          <span className="font-bold text-md"> Click to Search</span>
          <span className="text-gray-500 text-sm ">Write the name of the machine</span>
        </div>
        <TuneIcon className="cursor-pointer text-gray-600 ml-auto" sx={{ fontSize: 24 }} />
      </div>
    </div>
  );
}

export default SearchBar;
