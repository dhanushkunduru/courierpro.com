import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Card from '../components/Card';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">404</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
            <p className="mt-4 text-lg text-slate-600">The route you requested is unavailable. Return to the logistics platform home to continue managing operations.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Button variant="primary" onClick={() => navigate('/')}>Back home</Button>
              <Button variant="secondary" onClick={() => navigate('/track')}>Track shipment</Button>
            </div>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}