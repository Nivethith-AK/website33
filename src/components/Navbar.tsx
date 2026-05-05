import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Designers', href: '/designers' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'glass-dark py-4 shadow-2xl border-[var(--border-primary)]' : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest font-bold text-[var(--text-primary)] group">
          AVN<span className="group-hover:text-luxury-accent transition-colors">T</span>AE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative py-2 ${
                  isActive ? 'text-luxury-accent' : 'text-[var(--text-primary)] opacity-40 hover:opacity-100'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-luxury-accent"
                  />
                )}
              </Link>
            )
          })}
          
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-[var(--border-primary)] rounded-full flex items-center justify-center text-luxury-accent hover:bg-luxury-accent hover:text-[var(--bg-primary)] transition-all group relative"
            title="Toggle Theme (Ctrl/Cmd + T)"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] whitespace-nowrap opacity-0 group-hover:opacity-40 transition-opacity uppercase tracking-widest font-bold">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-[var(--border-primary)] rounded-full flex items-center justify-center text-luxury-accent"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)] opacity-70 hover:opacity-100 transition-opacity">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden overflow-hidden origin-top absolute top-full left-0 w-full border-b border-[var(--border-primary)] ${
              scrolled ? 'glass-dark' : 'bg-[var(--bg-primary)] shadow-2xl'
            }`}
          >
            <div className="flex flex-col items-center py-12 gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg uppercase tracking-[0.4em] font-light transition-all ${
                      isActive ? 'text-luxury-accent' : 'text-[var(--text-primary)] opacity-40 hover:opacity-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
