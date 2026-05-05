import { motion, useInView, useAnimation } from 'motion/react';
import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%" | "130%" | string;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25, className = "" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.8, 
          delay: delay,
          ease: [0.16, 1, 0.3, 1] // Custom quint ease for luxury feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
