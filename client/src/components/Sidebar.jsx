import { LayoutDashboard, PlusCircle, Search, Pencil, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  { label: 'Overview', icon: LayoutDashboard, to: '/dashboard' },
  { label: 'Add Shipment', icon: PlusCircle, to: '/add' },
  { label: 'Track', icon: Search, to: '/track' },
  { label: 'Edit', icon: Pencil, to: '/edit/1' },
  { label: 'Preferences', icon: Settings, to: '/login' }
];

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-slate-950 px-5 py-6 lg:flex lg:flex-col">
      <div className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-4">
        <p className="text-sm font-semibold text-white">Operations Center</p>
        <p className="mt-1 text-sm text-slate-400">Premium logistics overview</p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
