import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLayout;
