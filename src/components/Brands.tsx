import AnimatedSection from './AnimatedSection';

const BRANDS = [
  'BALENCIAGA', 'CELINE', 'DIOR', 'GIVENCHY', 'HERMÈS', 
  'LOEWE', 'MARGIELA', 'PRADA', 'SAINT LAURENT', 'VALENTINO'
];

export default function Brands() {
  return (
    <AnimatedSection className="py-24 bg-[var(--bg-primary)] overflow-hidden border-y border-[var(--border-primary)] relative">
      <div className="absolute left-0 top-0 w-48 md:w-80 h-full bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-48 md:w-80 h-full bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-marquee whitespace-nowrap py-6">
        {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-5xl font-serif mx-12 md:mx-24 text-[var(--text-primary)] opacity-30 hover:text-luxury-accent hover:opacity-100 transition-all duration-1000 cursor-default tracking-[0.2em] select-none"
          >
            {brand}
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
