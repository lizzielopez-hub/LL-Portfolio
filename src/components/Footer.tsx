import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-32 pb-16 px-6 border-t border-brand-purple/10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
              GET IN <br />
              <span className="text-brand-purple" style={{ textShadow: '0 0 40px rgba(168,85,247,0.35)' }}>TOUCH.</span>
            </h2>
            <p className="text-brand-muted text-base font-light max-w-md mb-10 leading-relaxed">
              Available for collaborations, coffee chats, and creative challenges. Contact me through any of these!
            </p>
            <div className="flex gap-4 text-brand-muted">
              <a href="mailto:lizlopezvillanueva@gmail.com"
                className="hover:text-brand-purple transition-colors p-3 bg-brand-purple/8 border border-brand-purple/12 rounded-xl hover:border-brand-purple/30 hover:bg-brand-purple/15">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/lizzie-lopez-9199443b6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple transition-colors p-3 bg-brand-purple/8 border border-brand-purple/12 rounded-xl hover:border-brand-purple/30 hover:bg-brand-purple/15">
                <Linkedin size={20} />
              </a>
              <a href="#"
                className="hover:text-brand-purple transition-colors p-3 bg-brand-purple/8 border border-brand-purple/12 rounded-xl hover:border-brand-purple/30 hover:bg-brand-purple/15">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border border-brand-purple/20 bg-brand-purple/8 flex items-center justify-center text-brand-muted hover:text-brand-purple hover:border-brand-purple/50 transition-all mb-8"
            >
              <ArrowUp size={20} />
            </motion.button>
            <div className="text-right">
              <p className="text-xs font-mono text-brand-muted mb-1 uppercase tracking-widest">Digital Signature</p>
              <p className="text-2xl font-display font-bold tracking-tighter">LIZZIE / 2026</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-brand-purple/10 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted">
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-purple transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-purple transition-colors">Terms</a>
          </div>
          <p>© 2026 LIZZIE</p>
        </div>
      </div>
    </footer>
  );
}
