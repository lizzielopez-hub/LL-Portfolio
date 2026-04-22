import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[10px] font-sans font-bold tracking-[0.18em] uppercase border border-brand-purple/25 text-brand-purple rounded-full bg-brand-purple/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple inline-block animate-pulse" />
            Available for new opportunities
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter mb-8">
            LIZZIE <br />
            <span className="text-brand-purple" style={{ textShadow: '0 0 60px rgba(168,85,247,0.4)' }}>LOPEZ</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid md:grid-cols-12 gap-8 items-end mt-4"
        >
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed">
              Curiosity in Motion
            </p>
          </div>

          <div className="md:col-span-6 lg:col-start-9 flex flex-col gap-6">
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-6 py-3 bg-white text-brand-dark rounded-full font-bold text-sm overflow-hidden cursor-pointer"
                style={{ boxShadow: '0 0 30px -4px rgba(168,85,247,0.5)' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Work <ArrowDownRight size={16} />
                </span>
              </motion.div>
              <a href="mailto:lizlopezvillanueva@gmail.com" className="px-6 py-3 border border-brand-purple/20 rounded-full font-bold text-sm text-brand-muted hover:border-brand-purple/50 hover:text-brand-purple transition-all bg-brand-purple/5">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-brand-muted"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12"
          style={{ background: 'linear-gradient(to bottom, #A855F7, transparent)' }} />
      </motion.div>
    </section>
  );
}
