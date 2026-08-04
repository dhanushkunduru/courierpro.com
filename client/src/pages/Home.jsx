import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PackageCheck, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Card from '../components/Card';

const stats = [
  { label: 'Total shipments', value: '24.8K', detail: 'Managed globally' },
  { label: 'Delivered', value: '98.2%', detail: 'On-time performance' },
  { label: 'Cities covered', value: '186', detail: 'Cross-border support' },
  { label: 'Tracking accuracy', value: '99.6%', detail: 'Live visibility' }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_40%),linear-gradient(180deg,_#f8fafc_0%,_#f8fbff_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              Enterprise logistics management platform
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Enterprise Shipment Tracking
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Track and manage shipments with real-time logistics visibility, secure handling, and contextual operations insight.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" onClick={() => navigate('/track')} className="gap-2">
                Track shipment <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" onClick={() => navigate('/dashboard')}>
                Open dashboard
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
                <PackageCheck className="h-4 w-4 text-blue-600" />
                Global shipment coverage
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
                <Globe2 className="h-4 w-4 text-blue-600" />
                Multi-region operations
              </span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
            <Card className="p-0 overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white">
                <p className="text-sm font-medium text-slate-300">Shipment command center</p>
                <p className="mt-1 text-2xl font-semibold">Live dispatch overview</p>
              </div>
              <div className="space-y-4 p-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">CT-2048</p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">In transit</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Seattle → New York • ETA 14:35</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">CT-2049</p>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Delivered</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">San Diego → Austin • Completed 09:15</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="bg-white">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}