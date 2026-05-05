import { motion } from 'motion/react';
import AnimatedSection from './AnimatedSection';
import { Reveal } from './ui/Reveal';

const STATS = [
  { label: 'Curation Experts', value: '500+' },
  { label: 'Global Fashion Houses', value: '120+' },
  { label: 'Launch Collaborations', value: '2.5k' },
  { label: 'Design Excellence', value: '100%' },
];

export default function Stats() {
  return (
    <AnimatedSection className="py-40 px-6 border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center group relative p-6 md:p-10"
            >
              <div className="absolute inset-0 bg-luxury-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl -z-10 rounded-full"></div>
              <Reveal width="130%" delay={i * 0.1}>
                <h3 className="text-5xl md:text-8xl font-serif mb-6 py-6 leading-tight text-gold-gradient transition-transform duration-700 tracking-tighter">
                  {stat.value}
                </h3>
              </Reveal>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-primary)] opacity-50 font-bold group-hover:opacity-100 transition-all duration-500 max-w-[150px] mx-auto leading-relaxed"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
