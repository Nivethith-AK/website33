import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityValue = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1, willChange: "transform" }}
        className="absolute -inset-y-[300px] inset-x-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=2071&auto=format&fit=crop"
          alt="Fashion Background"
          className="w-full h-full object-cover grayscale opacity-20 brightness-[var(--hero-brightness,0.3)] scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/80 to-[var(--bg-primary)]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div style={{ opacity: opacityValue }}>
            <Reveal delay={0.2}>
              <span className="text-luxury-accent uppercase tracking-[0.8em] text-[10px] font-mono font-bold mb-8 block">
                The Pinnacle of Fashion Talent
              </span>
            </Reveal>
            
            <Reveal delay={0.4} width="100%">
              <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-serif leading-[0.9] mb-12 tracking-tighter py-4">
                Connect with <br />
                <span className="text-gold-gradient">Visionaries</span>
              </h1>
            </Reveal>
            
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-32 bg-luxury-accent/30 mx-auto mb-10"
            />

            <Reveal delay={0.6} width="100%">
              <p className="text-[var(--text-primary)] opacity-60 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed mb-16 tracking-wide px-4">
                AVNTAE is an exclusive ecosystem facilitating connections between global fashion houses and high-caliber creative minds.
              </p>
            </Reveal>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 w-full px-4"
            >
              <Link
                to="/designers"
                className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] uppercase tracking-[0.4em] font-mono font-bold rounded-full flex items-center justify-center gap-4 group transition-all duration-700 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-2 active:scale-95 border border-transparent hover:border-luxury-accent/40"
              >
                Explore Roster <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 border border-[var(--text-primary)]/20 text-[var(--text-primary)] text-[10px] uppercase tracking-[0.4em] font-mono font-bold rounded-full flex items-center justify-center gap-4 transition-all duration-700 hover:border-luxury-accent hover:-translate-y-2 active:scale-95 hover:bg-luxury-accent/5 backdrop-blur-sm"
              >
                Partner with Us <Play size={12} className="fill-current" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4 opacity-30 text-[var(--text-primary)]"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
          <div className="w-[1px] h-16 bg-[var(--text-primary)]/20"></div>
        </motion.div>
      </div>
    </section>
  );
}
