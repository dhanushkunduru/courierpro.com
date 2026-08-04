function TrackingTimeline() {
  const items = [
    { title: 'Shipment created', time: '08:20', detail: 'Origin scanned and accepted' },
    { title: 'In transit', time: '11:45', detail: 'Cross-dock transfer completed' },
    { title: 'Out for delivery', time: '15:10', detail: 'Assigned to local courier' },
    { title: 'Delivered', time: '16:00', detail: 'Signed and completed' }
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">Shipment timeline</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.title} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`mt-1 h-3 w-3 rounded-full ${index < 3 ? 'bg-blue-600' : 'bg-emerald-500'}`} />
              {index < items.length - 1 ? <div className="mt-1 h-full w-px bg-slate-200" /> : null}
            </div>
            <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-500">{item.time}</p>
              </div>
              <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackingTimeline;
