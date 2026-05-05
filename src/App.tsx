/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Designers from './components/Designers';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Stats from './components/Stats';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import PageTransition from './components/PageTransition';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Routes, Route, useLocation } from 'react-router-dom';

function Home() {
  return (
    <PageTransition>
      <Hero />
      <Brands />
      <Stats />
    </PageTransition>
  );
}

function DesignersPage() {
  return (
    <PageTransition>
      <Designers />
    </PageTransition>
  );
}

function HowItWorksPage() {
  return (
    <PageTransition>
      <HowItWorks />
    </PageTransition>
  );
}

function PortfolioPage() {
  return (
    <PageTransition>
      <Portfolio />
    </PageTransition>
  );
}

function ContactPage() {
  return (
    <PageTransition>
      <Contact />
    </PageTransition>
  );
}

function AboutUsPage() {
  return (
    <PageTransition>
      <AboutUs />
    </PageTransition>
  );
}

function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <PrivacyPolicy />
    </PageTransition>
  );
}

function TermsOfServicePage() {
  return (
    <PageTransition>
      <TermsOfService />
    </PageTransition>
  );
}

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 't') {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 500);
    });
  }, [scrollY]);

  // Scroll logic moved to PageTransition to wait for animations

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={theme}>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-luxury-accent selection:text-[var(--bg-primary)] min-h-screen transition-colors duration-700">
        <AnimatePresence>
          {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.1,
              transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } 
            }}
            className="fixed inset-0 z-[100] bg-[var(--bg-primary)] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-serif font-bold tracking-[0.8em] text-[var(--text-primary)]"
              >
                AVNTAE
              </motion.h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                className="h-[1px] w-full bg-luxury-accent absolute -bottom-4 left-0 origin-left"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 text-[10px] uppercase tracking-[0.4em] text-[var(--text-primary)] opacity-30 font-bold"
            >
              Curating Creative Excellence
            </motion.p>
          </motion.div>
        )}
        </AnimatePresence>

        <motion.div className="scroll-progress z-[60] fixed top-0 left-0 right-0 h-1 bg-luxury-accent origin-left" style={{ scaleX }} />
        
        {!isLoading && <Navbar theme={theme} toggleTheme={toggleTheme} />}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col min-h-screen"
        >
          <main className="flex-grow pt-24">
            <AnimatePresence mode="wait">
              {/* @ts-ignore - React Router v7 RoutesProps doesn't explicitly include key, but AnimatePresence requires it */}
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/designers" element={<DesignersPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </motion.div>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-[60] w-12 h-12 glass rounded-full flex items-center justify-center text-luxury-accent hover:bg-luxury-accent hover:text-[var(--bg-primary)] transition-all shadow-2xl overflow-hidden shadow-luxury-accent/20"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

