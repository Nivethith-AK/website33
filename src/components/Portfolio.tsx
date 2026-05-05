import { motion } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import { Reveal } from './ui/Reveal';

const PORTFOLIO = [
  { id: 1, title: 'Summer Collection 2024', category: 'Luxury Wear', image: 'https://images.unsplash.com/photo-1539109132314-d4a8c77eeec2?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, title: 'Urban Tech-Vibe', category: 'Streetwear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop' },
  { id: 3, title: 'Eternal Lace', category: 'Bridal', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop' },
  { id: 4, title: 'Minimalist Structure', category: 'Haute Couture', image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Silk Cascades', category: 'Evening Wear', image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop' },
  { id: 6, title: 'Architectural Silhouettes', category: 'Avant-Garde', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop' },
];

export default function Portfolio() {
  return (
    <AnimatedSection id="portfolio" className="py-32 bg-[var(--bg-primary)] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <Reveal>
              <span className="text-luxury-accent uppercase tracking-[0.4em] text-[10px] font-mono font-bold mb-4 block">Work Showcase</span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="text-4xl md:text-6xl font-serif italic">Masterpieces</h2>
            </Reveal>
          </div>
          <Reveal delay={0.6}>
            <p className="text-[var(--text-primary)] opacity-40 max-w-sm text-sm font-light leading-relaxed tracking-wide italic border-l border-[var(--border-primary)] pl-6">
              "Design is the silent ambassador of your brand." — Discover a curated selection of our most groundbreaking collaborations.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer bg-[var(--text-primary)]/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex flex-col justify-end p-10 backdrop-blur-[2px]">
                <div className="overflow-hidden">
                  <motion.span 
                    className="text-luxury-accent uppercase tracking-[0.5em] text-[10px] font-mono font-bold mb-3 block transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]"
                  >
                    {item.category}
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-serif text-[var(--text-primary)] transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-[cubic-bezier(0.2,1,0.3,1)]"
                  >
                    {item.title}
                  </motion.h3>
                </div>
                
                <div className="overflow-hidden mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500">
                  <span className="text-[8px] uppercase tracking-[0.4em] font-mono font-bold text-[var(--text-primary)]/60 flex items-center gap-2">
                    View Project <div className="w-4 h-[1px] bg-luxury-accent"></div>
                  </span>
                </div>

                <motion.div 
                  className="w-0 h-[1px] bg-luxury-accent mt-4 group-hover:w-full transition-all duration-1000 delay-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
