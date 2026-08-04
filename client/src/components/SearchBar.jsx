import { Search } from 'lucide-react';

function SearchBar({ placeholder = 'Search shipments or route' }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <Search className="h-4 w-4 text-slate-400" />
      <input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder={placeholder} />
    </label>
  );
}

export default SearchBar;
