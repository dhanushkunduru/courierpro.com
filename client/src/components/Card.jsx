function Card({ children, className = '', padded = true }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] ${padded ? 'p-6' : ''} ${className}`}>{children}</div>
  );
}

export default Card;
