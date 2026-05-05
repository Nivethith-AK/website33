import { motion } from 'motion/react';
import { Designer } from '../types';
import AnimatedSection from './AnimatedSection';
import { Reveal } from './ui/Reveal';
import { Card } from './ui/Card';

const DESIGNERS: Designer[] = [
  {
    id: '1',
    name: 'Elena Vance',
    specialization: 'Luxury Evening Wear',
    bio: 'Former head designer at prestigious Paris ateliers, Elena blends classical elegance with modern structural integrity.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Marcus Kaine',
    specialization: 'Avant-Garde Streetwear',
    bio: 'Pioneering sustainable tech-fabrics, Marcus crafts high-performance silhouettes for the urban futuristic explorer.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Sofia Rossi',
    specialization: 'Luxury Bridal',
    bio: 'Capturing the essence of romance through hand-stitched lace and ethereal silk layers for modern minimalist brides.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Julian Thorne',
    specialization: 'High-End Minimalist Menswear',
    bio: 'Focusing on precision tailoring and the finest textiles to redefine modern masculine sophistication.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Designers() {
  return (
    <AnimatedSection id="designers" className="py-32 bg-[var(--bg-primary)] px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Reveal delay={0.4} width="100%">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif md:leading-tight">Exceptional <br />Designers</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {DESIGNERS.map((designer, index) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-[var(--text-primary)]/5 shadow-2xl">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[var(--bg-primary)]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-sm">
                  <span className="text-[var(--text-primary)] text-[10px] font-mono font-bold tracking-[0.3em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform">View Portfolio</span>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-4">{designer.name}</h3>
              <p className="text-[var(--text-primary)] opacity-40 text-sm font-light leading-relaxed mb-6 line-clamp-3 group-hover:opacity-100 transition-opacity duration-700">
                {designer.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
