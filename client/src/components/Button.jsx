import { motion } from 'framer-motion';

function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';
  const variants = {
    primary: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-300',
    dark: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500'
  };

  return (
    <motion.button whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </motion.button>
  );
}

export default Button;
