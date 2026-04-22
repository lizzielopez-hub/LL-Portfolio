import { motion } from 'motion/react';
import { Mail, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Community', href: '#community' },
];

export default function Navigation({ catsOn, onToggleCats, carsOn, onToggleCars }: { catsOn: boolean; onToggleCats: () => void; carsOn: boolean; onToggleCars: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/85 backdrop-blur-xl border-b border-brand-purple/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-brand-dark text-sm font-bold">
            L
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-brand-muted hover:text-brand-purple transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="h-4 w-[1px] bg-brand-purple/20 mx-2" />
          <div className="flex items-center gap-4 text-brand-muted">
            {/* Cat toggle */}
            <button
              onClick={onToggleCats}
              title={catsOn ? 'Hide cats' : 'Show cats'}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-purple transition-colors"
            >
              <span>🐱</span>
              <div
                className="relative w-9 h-5 rounded-full transition-colors duration-300"
                style={{ background: catsOn ? '#A855F7' : 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <div
                  className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  style={{ left: catsOn ? '18px' : '2px' }}
                />
              </div>
            </button>
            {/* Car toggle */}
            <button
              onClick={onToggleCars}
              title={carsOn ? 'Hide cars' : 'Show cars'}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-purple transition-colors"
            >
              <span>🏎️</span>
              <div
                className="relative w-9 h-5 rounded-full transition-colors duration-300"
                style={{ background: carsOn ? '#A855F7' : 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <div
                  className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  style={{ left: carsOn ? '18px' : '2px' }}
                />
              </div>
            </button>
            <div className="h-4 w-[1px] bg-brand-purple/20" />
            <a href="mailto:lizlopezvillanueva@gmail.com"
              className="hover:text-brand-purple transition-colors p-2 rounded-lg hover:bg-brand-purple/10">
              <Mail size={17} />
            </a>
            <a href="https://www.linkedin.com/in/lizzie-lopez-9199443b6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple transition-colors p-2 rounded-lg hover:bg-brand-purple/10">
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-muted hover:text-brand-purple transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-brand-surface border-b border-brand-purple/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-brand-muted hover:text-brand-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
