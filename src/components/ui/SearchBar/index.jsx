import { Search, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedCryptos } from "../../../slices/dataSlice";

const SearchBar = () => {

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  // Dispatch the search querie to the store
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchedCryptos({ searchQuery }));
  };

  // Clears search values and restore original data
  const handleClearSearch = () => {
    setSearchQuery("");
    dispatch(setSearchedCryptos({ searchQuery }));
  }

  return(
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <div className="flex w-full border border-gray-300 rounded-full overflow-hidden 
      focus-within:border-white focus-within:ring-2 focus-within:ring-indigo-500
      dark:border-slate-500 dark:bg-slate-700 dark:focus-within:border-slate-700">
        
        <input
          type="text"
          className="flex-grow px-4 py-1.5 text-gray-700 focus:outline-none dark:text-gray-100"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        {
          !searchQuery ?
          <button
            type="submit"
            className="px-4 py-1.5 rounded-r-full cursor-pointer"
          >
            <Search size={18} className="dark:text-slate-200"/>
          </button> :

          <button
            type="button"
            className="px-4 py-1.5 rounded-r-full cursor-pointer"
            onClick={handleClearSearch}
          >
            <X size={18} className="dark:text-slate-200"/>
          </button>
        }
      </div>
    </form>
  );
};

export { SearchBar };