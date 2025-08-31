import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    // onSearch(query);
  };

  return(
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto">
      <div className="flex w-full border border-gray-300 rounded-full overflow-hidden focus-within:border-white focus-within:ring-2 focus-within:ring-indigo-500">
        <input
          type="text"
          className="flex-grow px-4 py-1.5 text-gray-700 focus:outline-none"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-1.5 rounded-r-full cursor-pointer"
        >
          <Search size={18} />
        </button>
      </div>
    </form>
  );
};

export { SearchBar };