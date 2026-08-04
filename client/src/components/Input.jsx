function Input({ label, className = '', ...props }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label ? <span className="mb-2 block">{label}</span> : null}
      <input className={`w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 ${className}`} {...props} />
    </label>
  );
}

export default Input;
