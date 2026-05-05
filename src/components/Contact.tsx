import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = 'Please provide your name';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'A valid email is required';
    if (!message) newErrors.message = 'Please share your vision';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <AnimatedSection id="contact" className="py-32 px-6 scroll-mt-32">
      <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-[var(--border-primary)]">
        <div className="md:w-5/12 bg-[var(--text-primary)] text-[var(--bg-primary)] p-12 md:p-20 flex flex-col justify-between transition-colors duration-500">
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold mb-6 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 italic leading-tight">Begin Your <br />Journey</h2>
            <p className="opacity-60 font-light mb-16 leading-relaxed text-lg">
              Whether you are looking to hire a visionary or showcase your craft, our concierge team is here to assist.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)]/5 flex items-center justify-center">
                  <Mail size={20} className="opacity-60" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Email Our Concierge</p>
                  <p className="text-lg font-serif">concierge@avntae.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)]/5 flex items-center justify-center">
                  <MapPin size={20} className="opacity-60" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Global Headquarters</p>
                  <p className="text-lg font-serif italic">Rue Saint-Honoré, Paris</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-7/12 p-12 md:p-20 relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-8"
              >
                <div className="w-24 h-24 bg-luxury-accent/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={48} className="text-luxury-accent" />
                </div>
                <div>
                  <h3 className="text-4xl font-serif mb-4">Message Received</h3>
                  <p className="text-[var(--text-primary)] opacity-40 font-light max-w-sm mx-auto leading-relaxed">
                    Connecting your vision with excellence. Our team will review your submission and reach out within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setFormState('idle')}
                  className="px-10 py-4 bg-luxury-accent text-[var(--bg-primary)] rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-transform"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="space-y-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-primary)] opacity-30 font-bold transition-colors group-focus-within:text-luxury-accent">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Alexander McQueen"
                    className={`input-luxury ${errors.name ? 'border-red-500' : 'border-[var(--border-primary)]'} text-lg placeholder:text-[var(--text-primary)] placeholder:opacity-10`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 tracking-widest">{errors.name}</p>}
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-primary)] opacity-30 font-bold transition-colors group-focus-within:text-luxury-accent">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    className={`input-luxury ${errors.email ? 'border-red-500' : 'border-[var(--border-primary)]'} text-lg placeholder:text-[var(--text-primary)] placeholder:opacity-10`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 tracking-widest">{errors.email}</p>}
                </div>

                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-primary)] opacity-30 font-bold transition-colors group-focus-within:text-luxury-accent">Inquiry Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your next visionary project..."
                    className={`input-luxury ${errors.message ? 'border-red-500' : 'border-[var(--border-primary)]'} text-lg resize-none placeholder:text-[var(--text-primary)] placeholder:opacity-10`}
                  ></textarea>
                  {errors.message && <p className="text-[10px] text-red-500 tracking-widest">{errors.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-5 bg-luxury-accent text-[var(--bg-primary)] text-[10px] uppercase tracking-[0.4em] font-bold rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 shadow-luxury-accent/20 shadow-xl transition-all"
                >
                  {formState === 'submitting' ? (
                    <div className="flex items-center gap-2">
                       <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                         className="w-4 h-4 border-2 border-[var(--bg-primary)]/30 border-t-[var(--bg-primary)] rounded-full"
                       />
                       <span>Transmitting</span>
                    </div>
                  ) : (
                    <>Submit Inquiry <Send size={14} /></>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
