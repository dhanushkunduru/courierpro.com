import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <div className="mb-6 flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
