import { Link, useNavigate } from 'react-router-dom';
import { Package2, ShieldCheck, Menu } from 'lucide-react';
import Button from './Button';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-600/10 p-2.5">
            <Package2 className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">CourierPro</p>
            <p className="text-xs text-slate-500">Enterprise Logistics</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link to="/" className="transition hover:text-slate-900">Home</Link>
          <Link to="/track" className="transition hover:text-slate-900">Track</Link>
          <Link to="/dashboard" className="transition hover:text-slate-900">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 md:flex">
            <ShieldCheck className="h-4 w-4" />
            Live visibility
          </div>
          <Button variant="primary" className="hidden sm:inline-flex" onClick={() => navigate('/login')}>
            Access portal
          </Button>
          <button className="rounded-2xl border border-slate-200 p-2 text-slate-600 md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
